import React from "react";
import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import throttle from "lodash/throttle";
import { makeStyles, withStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import theme from '../hooks/theme';
import Footer from "./Footer";

const tabHeight = 69; // individual height attr for the tab itself
const altTabHeight = 30;
const panelTop = 160; // top set to position tab-contents-panel below sticky appbar & tabs heights

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        "& > div": {
            maxWidth: '90%',
            width: "100%",
            backgroundColor: '#FFBC28',
            height: '19px',
        },
    },
})((props) => 
        <Tabs 
            {...props} 
            TabIndicatorProps={{ children: <div /> }} 
            variant="fullWidth" 
            sx={{ 
                backgroundColor: '#2b2b2b', 
                width: '100%', 
                margin: '0 auto'
            }}
            textColor='inherit'
            aria-label="tab-navigation"
        />
    );

const IndivTabStyles = {
    textTransform: 'none',
    height: tabHeight,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
        opacity: 1,
    },
    '@media(max-height: 800px)': {
        height: altTabHeight,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    indicator: {
        padding: theme.spacing(0),
    },
    demo2: {
        backgroundColor: "#2b2b2b",
        position: "sticky",
        top: 110,
        left: 0,
        right: 0,
        boxShadow: '0px 8px 6px #2b2b2b',
        zIndex: 100,
        '@media(max-width: 700px)': {
            top: 150,
        }
    },
    tabPanel: {
        zIndex: 100
    }
}));

/******* This is the scroll spy magic */
/*
Credits: Material UI & *(modified a bit of course - had own implementation - nearly the same as this, though mine had a couple of 
    persistant issues that stumped me for a while)
Source: https://github.com/mui-org/material-ui/blob/404c2ba16816f5c7ab7d8b2caf6bbc3d2218b820/docs/src/modules/utils/textToHash.js
*/
const makeUnique = (hash, unique, i = 1) => {
    const uniqueHash = (i === 1 ? hash : `${hash}-${i}`);

    if (!unique[uniqueHash]) {
        unique[uniqueHash] = true;
        return uniqueHash;
    }

    return makeUnique(hash, unique, i + 1);
};

const textToHash = (text, unique = {}) => {
    return makeUnique(
        encodeURI(text.toLowerCase()
                .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
                // eslint-disable-next-line no-useless-escape
                .replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "")
            ),
            unique
    );
};
const noop = () => {};

function useThrottledOnScroll(callback, delay) {
    const throttledCallback = useMemo(
        () => (callback ? throttle(callback, delay) : noop),
        [callback, delay]
    );

    useEffect(() => {
        if (throttledCallback === noop) return undefined;

        window.addEventListener("scroll", throttledCallback);
        return () => {
            window.removeEventListener("scroll", throttledCallback);
            throttledCallback.cancel();
        };
    }, [throttledCallback]);
}

function TabsComponent(props) {
    const [activeState, setActiveState] = useState(null);
    const { tabsInScroll } = props;

    let itemsServer = tabsInScroll.map((tab) => {
        const hash = textToHash(tab.text);
        return {
            icon: tab.icon || "",
            text: tab.text,
            component: tab.component,
            hash: hash,
            node: document.getElementById(hash),
        };
    });

    const itemsClientRef = useRef([]);
    useEffect(() => {
        itemsClientRef.current = itemsServer;
    }, [itemsServer]);

    const clickedRef = useRef(false);
    const unsetClickedRef = useRef(null);
    const findActiveIndex = useCallback(() => {
        if (activeState === null) setActiveState(itemsServer[0].hash); // set default if activeState is null
        if (clickedRef.current) return;  // Don't set the active index based on scroll if a link was just clicked

        let active;
        for (let i = itemsClientRef.current.length - 1; i >= 0; i -= 1) {
            if (document.documentElement.scrollTop < 0) {  // No hash if we're near the top of the page
                active = { hash: null };
                break;
            }

            const item = itemsClientRef.current[i];

            if (item.node && item.node.offsetTop < document.documentElement.scrollTop + document.documentElement.clientHeight / 8 + tabHeight ) {
                active = item;
                break;
            }
        }

        if (active && activeState !== active.hash) {
            setActiveState(active.hash);
        }
    }, [activeState, itemsServer]);

    useThrottledOnScroll(itemsServer.length > 0 ? findActiveIndex : null, 166);  // Corresponds to 10 frames at 60 Hz

    const handleClick = (hash) => () => {
        clickedRef.current = true;  // Used to disable findActiveIndex if the page scrolls due to a click
        unsetClickedRef.current = setTimeout(() => {
            clickedRef.current = false;
        }, 1000);

        if (activeState !== hash) {
            setActiveState(hash);

        if (window)
            window.scrollTo({
                top: document.getElementById(hash).getBoundingClientRect().top - panelTop + window.pageYOffset,
                behavior: "smooth",
            });
        }
    };

    useEffect(
        () => () => {
            clearTimeout(unsetClickedRef.current);
        },[]
    );

    const classes = useStyles();

    return (
        <div>
            <nav className={classes.demo2}>
                <StyledTabs value={activeState ? activeState : itemsServer[0].hash}>
                    {itemsServer.map((item2) => (
                        <Tab
                            sx={IndivTabStyles}
                            key={item2.hash}
                            label={item2.text}
                            onClick={handleClick(item2.hash)}
                            value={item2.hash}
                        />
                    ))}
                </StyledTabs>
                <div className={classes.indicator} />
            </nav>

            <div className={classes.tabPanel}>
                {
                    itemsServer.map((item1) => (
                        <article id={item1.hash} key={item1.text}>
                            {item1.component}
                        </article>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default TabsComponent;
