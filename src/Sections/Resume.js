import React from 'react';
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Tools from '../components/Tools';
import theme from '../hooks/theme';

const surroundingContainer = { flexGrow: 1, padding: '60px 54px 100px' };
const gridCont = {justifyContent: 'space-between' };
const indivSectionTop = { margin: '0 auto 40px'};
const indivSection = { marginBottom: '40px' }
const miniCardCont = {
    padding: '18px 30px',
    marginBottom: '6px',
    background: '#28282960',
    border: '1px solid #2b2b2b',
    borderRadius: '8px',
    boxShadow: '2px 2px 4px #2b2b2b50',
    '@media(maxWidth: 700px)' : { 
        margin: '0 auto'
    }
};
const toolbox = {
    display: 'flex', 
    flexWrap: 'wrap',
    margin: '10px 20% 30px', 
    height: 'fit-content', 
    justifyContent: 'center', 
};
const iconBox = { textAlign: 'center', marginTop: '20px' };


function Resume() {
    return (
        <Box component="div" sx={ surroundingContainer }>
            {/* First grid section */}
            <Grid container sx={gridCont}>
                <Grid item xs={12}>
                    <Typography sx={theme.typography.bigTabPanelHeader}>
                        Resum&eacute;
                    </Typography>
                </Grid>
                {/* Left section of 2 SBS row - xs size single col */}
                <Grid item xs={12} sm={10} md={5} sx={indivSectionTop}>
                    <div style={miniCardCont}>
                        <Typography sx={theme.typography.yellowHeader}>Experience</Typography>
                        <ul style={theme.typography.listStyle}>
                            <li>1.5 years web development</li>
                            <li>12 years customer service</li>
                        </ul>
                    </div>
                    <div style={miniCardCont}>
                        <Typography sx={theme.typography.yellowHeader}>Qualifications</Typography>
                        <ul style={theme.typography.listStyle}>
                            <li>4+ years web development & IS&T education</li>
                            <li>2 published websites, 1 project WIP</li>
                        </ul>
                    </div>
                    <div style={miniCardCont}>
                        <Typography sx={theme.typography.yellowHeader}>Languages</Typography>
                        <ul style={theme.typography.listStyle}>
                            <li>Great with Javascript, practiced with Python and Java</li>
                            <li>Always working toward mastery</li>
                        </ul>
                    </div>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item xs={12} md={5.75} sx={indivSection}>
                    <Typography sx={theme.typography.tinyFaded}>
                        Welcome to my Profile
                    </Typography>
                    <Typography sx={theme.typography.stressedOpaqueHeader}>
                        I'm Mike Wheeler
                    </Typography>
                    <div>
                        <br/>
                        <Typography sx={theme.typography.slantText}>
                            I am currently looking for position in web development
                        </Typography>
                        <Typography sx={theme.typography.tinyFaded}> 
                            <br />
                            I have a bit over a year and half of experience in web development and am looking forward to 
                            continuing on in this line of work.
                            <br />
                            <br />
                            I'm no stranger to learning about a new programming language, library, or framework. I believe 
                            that good work that stands for itself and makes a difference.                             
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            {/* TOOLS COMPONENT - Centered full-width row cont  */}
            <div style={iconBox}>
                <Typography style={theme.typography.slantText}>Top Languages & Libraries</Typography>
                <div style={toolbox}>
                    <Tools which={'langs'} />
                </div>
            </div>

            {/* Second-mid grid section */}
            <Grid container sx={gridCont}>
                {/* Left section of 2 SBS row - xs size single col */}
                <Grid item md={5.75} sx={indivSection}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>Goals</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        Being fairly well versed in javascript-based frontends, I continue to work toward learning 
                        the entire stack. I've implemented backends in node.js and a couple instances using both
                        the django REST framework and C#/.NET. 
                        <br />
                        <br />
                        From my time with working on projects and apps, I've realized it's much easier to dream up a great app than
                        having the amount of time and knowledge to accomplish this alone. I would like to be a part of a team 
                        to develop apps with a wider scope.
                    </Typography>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item md={5.75} sx={indivSection}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>Recent Work</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        H&W Stair & Rail is a site I voluntarily built for a new metalworking business.
                        This site is currently still an ongoing effort, but should be complete before too long.
                        <br />
                        <br />
                        I have built this profile using React frontend library, JS, and Material UI - with alot of my own 
                        additions and tweeks to the predefined components.
                        <br />

                    </Typography>
                </Grid>
            </Grid>
            {/* TOOLS COMPONENT - Centered full-width row cont */}
            <div style={iconBox}>
                <Typography style={theme.typography.slantText}>Favorite Tools & Peripherals</Typography>
                <div style={toolbox}>
                    <Tools which={'tools'} />
                </div>
            </div>
        </Box>
    )
}

export default Resume;