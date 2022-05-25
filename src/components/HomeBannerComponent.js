import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import yProfile from '../static/images/profileCircle_y.png';
import theme from '../hooks/theme';


// grid - splits top area into roughly 2 halves
const cont = {
    display: "flex", 
    paddingTop: '141px', 
    backgroundColor: '#2b2b2b',
    justifyContent: 'space-between',
    marginBottom: '-30px',
    minHeight: '420px',
    paddingLeft: '13%',
    flexGrow: 1,
    '@media(max-width: 520px)':{
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: '0%',
    }
}
const leftUpperItem = { marginTop: '20px' };
const leftLowerItem = { 
    color: 'white',
    display: 'flex',
    padding: '20px 0',
    justifyContent: 'center',
    '@media(max-width: 500px)': {
        paddingLeft: 0,
        margin: 0,
    }
};
const rightItem = { 
    display: 'block',
    alignItems: 'center', 
    width: 'fit-content',
    marginRight: '50px',
    '@media(max-width: 500px)': {
        display: 'none',
        marginRight: 0,
    }
};
const statsCont = { 
    display: 'flex', 
    position: 'static',
    flexDirection: 'row',
    align: 'left',
    paddingTop: '20px',
};
const profileGraphic = { 
    height: '430px',
    position: 'static', 
    zIndex: '0',
};
const tagline = { maxWidth: 400, height: 'fit-content',  '@media(max-width: 500px)': {maxWidth: 0, margin: '0 auto'} };
const statsStyles = { display: 'flex', flexDirection: 'row', width: '120px', justifyContent: 'center' };
const statsTextEls = { fontSize: '10%', opacity: '50%', marginLeft: '6px', alignSelf: 'center', textAlign: 'left' };
const tabbyHeaders = { fontSize: 32, fontWeight: 500}

function useWindowX() {
    const [watchX, setWatchX] = useState(false);
    const mql = window.matchMedia("(max-width: 500px)");
    
    // navigator.mediaDevices.enumerateDevices().then((med) => {console.log("media device type:",  med)})

    useEffect(() => {
        function handleResize(e) {
            e.matches ? setWatchX(true) : setWatchX(false)
        }
        mql.addEventListener("change", handleResize);

        return () => { mql.removeEventListener("change", handleResize) }
    }, [])

    return watchX;
}


function HomeBannerComponent() {
    let currWatchX = useWindowX();
    const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;

    return (
        <Box component="div" sx={cont}>
            <div>
                <div style={leftUpperItem}>
                    <h1 style={theme.typography.h1style}>Web Developer</h1>
                    <h2 style={tagline}>Passion for Engineering and Mechanics</h2>
                    <h3 style={theme.typography.h3style}>
                        <code>{'<Frontend 🔥 />'}</code>
                        <br />
                        <code>{'<Some fullstack experience 🤙 />'}</code>
                        <br />
                        <code>{'<Always learning 🧑‍💻 />'}</code>
                        {/* 🧑‍💻😉🤙👌💻🔥 */}
                    </h3>
                </div>
                <div style={leftLowerItem}>
                    <div style={statsCont}>
                        <div style={statsStyles}>
                            <Typography sx={tabbyHeaders}>
                                BS
                            </Typography>
                            <Typography sx={statsTextEls}>
                                MANAGEMENT INFORMATION SYSTEMS
                            </Typography>
                        </div>
                        <div style={statsStyles}>
                            <Typography sx={tabbyHeaders}>
                                1.5
                            </Typography>
                            <Typography sx={statsTextEls}>
                                YEARS OF EXPERIENCE
                            </Typography>
                        </div>
                        <div style={statsStyles}>
                            <Typography sx={tabbyHeaders}>
                                20+
                            </Typography>
                            <Typography sx={statsTextEls}>
                                PROJECTS
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            {
                (!isMobile && !currWatchX)
                ?
                    <div style={rightItem}>
                        <img style={profileGraphic} alt="profile-graphic" src={yProfile} />
                    </div>
                :
                null
            }
        </Box>
    )
}

export default HomeBannerComponent;