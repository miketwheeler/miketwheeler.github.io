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
                                <li>React</li>
                                <li>REST API Integration</li>
                                <li>Reusable & Custom Components</li>
                                <li>Material UI & Bootstrap</li>
                                <li>HTML & CSS</li>
                                <li>Project Management and Development</li>
                                <li>Agile / Kanban / Scrum</li>
                                <li>Python</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={miniCardCont}>
                        <Typography sx={theme.typography.yellowTitle}>
                            Secondaries
                        </Typography>
                        <Typography>
                            <ul style={theme.typography.listStyle}>
                            <li>C# and ASP.NET</li>
                                <li>Blazor Server & WASM</li>
                                <li>Django & Django REST Framework</li>
                                <li>Relational Databases</li>
                                <li>MongoDB & Firebase Databases</li>
                                <li>Cloud Deployment</li>
                                <li>Adobe Suite of Apps</li>
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
                        Hello, I'm Mike Wheeler
                    </Typography>
                    <div>
                        <br/>
                        <Typography sx={theme.typography.slantText}>
                            I code all day every day. Solving problems of all types is what I enjoy doing, it motivates me. I make an effort to learn something new every day.
                        </Typography>
                        <Typography sx={theme.typography.tinyFaded}> 
                            <br /> 
                            <br />
                            During the pursuit of my Management Information Systems degree I was exposed to high level project management, programming courses, 
                            in-depth databasing and server courses, and participated in many large projects that made a difference in my community.
                            <br />
                            <br />
                            Since graduating I have continued to take online courses and attended a bootcamp to further my knowledge in web development. I have successfully 
                            developed and deployed a website for a small company, created this site, and am currently working on a social site for connecting developers such as myself.                             
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
                        Being fairly well versed in javascript-based frontends, I continue to work toward learning 
                        the entire stack. I've implemented backends in node.js and a couple instances using both
                        the django REST framework and C#/.NET. 
                        <br />
                        <br />
                        Working on a larger app for the complexity and purpose challenges. From my time with working on 
                        projects and apps, I've realized it's much easier to dream up a great app than
                        having the amount of time and knowledge to accomplish this all alone. I would like to be a part of a 
                        team to develop apps of a wider scope.
                    </Typography>
                </Grid>
                {/* Right section of 2 row - xs size single col */}
                <Grid item md={5.5} sx={section}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>Recent Work</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        H&W Stair & Rail is a small metalworking company I had the pleasure of building the site for.
                        A few constraints they exhibited were to implement this within their smaller budget. I worked through and 
                        delivered a solution that would have near-zero overhead; for a small and local company it will suit their needs 
                        for some time to come. Visitors are able to read up on the business' services and contact them for quotes on any 
                        job inquiries they had. It also allows them to showcase projects they have completed. 
                        <br />
                        <br />
                        This site is currently live and being maintained on an as needed basis (Please see below for links).
                        <br />
                        <br />
                        This profile is built in React using Javascript, HTML, CSS, and Material UI. The majority of the components 
                        are custom built and some are predefined with a lot of tweeks to fit my needs. There are 3 APIs that I have 
                        integrated into the app for functionality, this includes a serverless messaging solution.
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
                <Grid item xs={12} sx={section}>
                    <Typography style={theme.typography.stressedOpaqueHeader}>About Me</Typography>
                    <Typography sx={theme.typography.tinyFaded}>
                        I strongly believe in fairness and equality for all!
                        <br/>
                        <br/>
                        Former employers have described me as intunitive, flexible, adaptive, investigative and a reliable member of their team.
                        <br/>
                        <br/>
                        Hobbies include repairing electronics, drone building and playing guitar when I have the time. 
                        I source components, solder them together and load firmware onto the flight control board. I tune the PID loop, 
                        set other parameters and sync up the associated hardware components. I enjoy flying them, but I'd rather build 
                        and program them. 
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume;