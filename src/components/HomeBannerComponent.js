import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import yProfile from '../static/images/profileCircle_y.png';


// grid - splits top area into roughly 2 halves
const cont = {
    display: "flex", 
    paddingTop: '141px', 
    backgroundColor: '#2b2b2b',
    justifyContent: 'space-between',
    marginBottom: '-30px',
    minHeight: '400px',
    '@media(maxWidth: 800px)':{
        marginBottom: '-10px'
    }
}
const leftItemUp = {
    marginLeft: '12%', 
    minWidth: '300px', 
    '@media(maxWidth: 700px)':{
        marginLeft: '40px'
    }
}
const leftItemDown = { 
    color: 'white',
    position: 'absolute',
    margin: 'auto auto',
    display: 'flex',
    padding: '20px 0',
    justifyContent: 'center',
    float: 'right',
    '@media(maxWidth: 700px)': {
        paddingLeft: 0,
    }
};
const rightItem = { 
    display: 'block',
    alignItems: 'center', 
    overflow: 'hidden', 
    width: 'fit-content',
    minWidth: '100px',
    paddingRight: '50px',
    '@media(maxWidth: 550px)':{
        display: 'none' 
    }
};
const statsCont = { 
    display: 'flex', 
    position: 'static',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    maxWidth: '560px', 
    minWidth: '380px',
};
const profileGraphic = { 
    overflow: 'hidden', 
    height: '430px',
    position: 'static', 
    zIndex: '0',
};
const header4Style = { color: '#FFBC28', padding: '4px 8px 0 0' };
const header3Style = { color: '#FFBC28', fontWeight: 100, padding: '40px 0px 0px', whiteSpace: 'nowrap' };
const tagline = { maxWidth: 300, height: 'fit-content' };
const statsStyles = { display: 'flex', flexDirection: 'row', width: '120px' };
const statsTextEls = { fontSize: 8, opacity: '50%', marginLeft: '8px', alignSelf: 'center' };
const tabbyHeaders = { fontSize: 32, fontWeight: 500}



function HomeBannerComponent() {
    let [watchX, setWatchX] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(maxWidth: 600px)");
        mql.addEventListener("change", resize);
        function resize(e){
            e.matches ? setWatchX(true) : setWatchX(false)
        }
        return () => {
            mql.removeEventListener("change", resize);
        }
    },[])

    return (
        <Box component="div" sx={cont}>
            <div style={leftItemUp}>
                <div style={{marginBottom: 'auto', marginTop: '20px'}}>
                    <h1 style={header4Style}>Web Developer</h1>
                    <h2 style={tagline}>Passion for Engineering and Mechanics</h2>
                    <h3 style={header3Style}>
                        <code>{'<Frontend 🔥 />'}</code>
                        <br />
                        <code>{'<Some fullstack experience 🤙 />'}</code>
                        <br />
                        <code>{'<Always learning 🧑‍💻 />'}</code>
                        {/* 🧑‍💻😉🤙💻🔥 */}
                    </h3>
                </div>
                <div style={leftItemDown}>
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
                !watchX
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