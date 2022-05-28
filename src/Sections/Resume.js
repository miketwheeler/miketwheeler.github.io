import React from 'react';
import { Grid, Typography } from "@mui/material";
import Tools from '../components/Tools';
import theme from '../hooks/theme';

const surroundingContainer = { 
    flexGrow: 1, 
    padding: '40px 6% 100px',
    '@media(max-width: 500px)': {
        padding: '40px 2% 100px',
    }
};
const gridCont = {
    justifyContent: 'space-between',
    gap: 2,
};
const sectionTopLeft = { margin: '0 0 40px'};
const sectionGeneral = { marginBottom: '40px' }
const miniCardCont = {
    padding: '18px 30px',
    marginBottom: '6px',
    background: '#28282960',
    border: '1px solid #2b2b2b',
    borderRadius: '8px',
    boxShadow: '2px 2px 4px #2b2b2b50',
};
const toolbox = {
    display: 'flex', 
    flexWrap: 'wrap',
    margin: '10px 10% 30px', 
    height: 'fit-content', 
    justifyContent: 'center',
};
const iconBox = { textAlign: 'center', marginTop: '20px' };


function Resume() {
    return (
        <div style={ surroundingContainer }>
            {/* First grid section */}
            <Grid container sx={gridCont}>
                <Grid item xs={12}>
                    <Typography sx={theme.typography.bigTabPanelHeader}>
                        Introduction
                    </Typography>
                </Grid>
                {/* Left section of 2 SBS row - xs size single col */}
                <Grid item xs={12} md={5} sx={sectionTopLeft}>
                    <div style={miniCardCont}>
                        <Typography sx={theme.typography.specialLargerText}>Skills</Typography>
                        <Typography sx={theme.typography.tinyFaded}>
                            <ul style={theme.typography.listStyle}>
                                <li>Javascript</li>
                                <li>React.js</li>
                                <li>API Integration</li>
                                <li>Reusable Components</li>
                                <li>Material UI & Bootstrap</li>
                                <li>HTML & CSS</li>
                                <li>Agile / Kanban / Scrum</li>
                            </ul>
                        </Typography>
                    </div>
                    <div style={miniCardCont}>
                        <Typography sx={theme.typography.specialLargerText}>Secondaries</Typography>
                        <Typography sx={theme.typography.tinyFaded}>
                            <ul style={theme.typography.listStyle}>
                                <li>Python & Django</li>
                                <li>Relational DBs - SQL</li>
                                <li>MongoDB & Firebase - NoSQL</li>
                                <li>Adobe Suite Apps</li>
                            </ul>
                        </Typography>
                    </div>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item xs={12} md={5.75} sx={sectionGeneral}>
                    <Typography sx={theme.typography.tinyFaded}>
                        Welcome to my Profile
                    </Typography>
                    <Typography sx={theme.typography.stressedOpaqueHeader}>
                        Hi, I'm Mike Wheeler
                    </Typography>
                    <div>
                        <br/>
                        <Typography sx={theme.typography.slantText}>
                            I love to code, I strive for a solution no matter the problem, I'm motivated and contiuously improve
                        </Typography>
                        <Typography sx={theme.typography.tinyFaded}> 
                            <br />
                            I welcome new programming languages, frameworks or libraries
                            <br />
                            <br />
                            Others would describe me as intunitive, flexible, adaptive, investigative and reliable
                            <br />
                            <br />
                            I believe work that can stand for itself <i>and</i> make a difference.                             
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
                <Grid item md={5.75} sx={sectionGeneral}>
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
                <Grid item md={5.75} sx={sectionGeneral}>
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
                <Typography style={theme.typography.slantText}>Favorite Tools</Typography>
                <div style={toolbox}>
                    <Tools which={'tools'} />
                </div>
            </div>
            <Grid container sx={gridCont}>
                <Grid item xs={12} sx={sectionGeneral}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>About Me</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        Drone building has been long-time hobby of mine. I source components, solder them together and 
                        load firmware onto the flight control board. In order to fly, they usually need a bit of 
                        tweaks to their parameters and then syncronization of their hardware components. Flight is fun 
                        in first-person-view, though I'd rather build and program them. 
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume;