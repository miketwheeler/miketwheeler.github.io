import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ConnectionsComponent from "./ConnectionsComponent";
import { Grid } from "@mui/material";


const appBarStyle = {
    boxShadow: 'none', 
    zIndex: 100,
    position: 'sticky'
}
const gridCont = {
    padding: '24px 54px 24px 0px',
    position: 'fixed',
    justifyContent: 'space-between',
    backgroundColor: '#2b2b2b',
    maxWidth: '1023px',
    '@media(max-width: 700px)': {
        justifyContent: 'center',
        height: 151,
        padding: '24px 0',
    }
}
const gridContBottom = {
    padding: '24px 54px 24px 0px',
    justifyContent: 'space-between',
    backgroundColor: '#2b2b2b',
    maxWidth: '1023px',
    zIndex: 0,
    '@media(max-width: 700px)': { 
        justifyContent: 'center',
        padding: '24px 0px',
        height: 151 
    }
}
const nameContStyle = {
    fontWeight: 200, 
    display: 'flex',
    marginLeft: '30px',
}


function TitleBar({pos}) {    
    return (
        <div style={{display: 'flex'}}>
            <AppBar sx={appBarStyle}>
                <Grid container sx={pos === 'start' ? gridCont : gridContBottom}>
                    <Toolbar>
                        <div style={nameContStyle}>
                            <Typography component="div" sx={{ fontSize: 32 }}>
                                Michael 
                            </Typography>
                            <Typography component="div" sx={{ marginLeft: "8px", fontSize: 32, opacity: ".4" }}>
                                Wheeler
                            </Typography>
                        </div>
                    </Toolbar>
                    <ConnectionsComponent xs={12} sm={6}/>
                </Grid>
            </AppBar>
        </div>
    );
}

export default TitleBar;