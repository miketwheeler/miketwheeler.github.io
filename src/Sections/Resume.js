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
const sectionTopLeft = { margin: '0 0 40px', width: '100%', justifyContent: 'center'};
const section = { marginBottom: '40px' };
const specTitle = {
    fontSize: 34,
    fontWeight: 600,
    color: '#FFBC28'
}
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
                <Grid container gap={1} xs={12} sm={5.5} sx={sectionTopLeft}>
                    <Grid item xs={12} sx={miniCardCont}>
                        <Typography sx={theme.typography.yellowTitle}>
                            Skills
                        </Typography>
                        <Typography>
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
                    </Grid>
                    <Grid item xs={12} sx={miniCardCont}>
                        <Typography sx={theme.typography.yellowTitle}>
                            Secondaries
                        </Typography>
                        <Typography>
                            <ul style={theme.typography.listStyle}>
                                <li>Python & Django</li>
                                <li>Relational DBs - SQL</li>
                                <li>MongoDB & Firebase - NoSQL</li>
                                <li>Adobe Suite Apps</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item xs={12} sm={5.5} sx={section}>
                    <Typography sx={theme.typography.tinyFaded}>
                        Welcome to my Profile
                    </Typography>
                    <Typography sx={specTitle}>
                        I'm Mike Wheeler
                    </Typography>
                    <div>
                        <br/>
                        <Typography sx={theme.typography.slantText}>
                            I strive for a solution no matter the problem and I love to code.
                        </Typography>
                        <Typography sx={theme.typography.listStyle}> 
                            <ul style={{padding: '0'}}>
                                <li>I enjoy learning new programming languages, frameworks and libraries.</li> 
                                <li>Others would describe me as intunitive, flexible, adaptive, investigative and reliable. </li>
                                <li>I believe work that can stand for itself <i>and</i> make a difference.</li>
                            </ul>                             
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
                <Grid item md={5.5} sx={section}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>Goals</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        I would like to develop on the backend more. I am fairly well versed in javascript and working 
                        with JS-based frontends. I continue to work toward mastering the entire stack. Until now, I've 
                        implemented small backends in Node.js and a couple of instances using both the django REST framework 
                        and in C#/.NET. 
                        <br />
                        <br />
                        Working on a larger app for the complexity and purpose challenges. From my time with working on 
                        projects and apps, I've realized it's much easier to dream up a great app than
                        having the amount of time and knowledge to accomplish this all alone. I would like to be a part of a 
                        team to develop apps with a wider scope.
                    </Typography>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item md={5.5} sx={section}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>Recent Work</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        H&W Stair & Rail is a site I voluntarily built for a small metalworking business.
                        This site is currently still an ongoing effort, but should be complete before too long.
                        <br />
                        <br />
                        This profile is built in React using JS, HTML, CSS, and Material UI. The majority of the components 
                        are custom built and some are predefined with a lot of tweeks to fit my needs. There are 3 APIs that I have 
                        integrated into the app for functionality. I also implemented a serverless messaging solution.
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
        </div>
    )
}

export default Resume;