import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import TitleBar from './TitleBar.js'

const container = {
    flexGrow: 1,
    backgroundColor: '#2b2b2b',
    padding: '80px 6%',
}
const leftSide = {
    '@media(max-width: 680px)': {
        textAlign: 'center',
    }
}
const rightSide = {
    marginLeft: '10%',
    '@media(max-width: 720px)': {
        marginLeft: 0
    },
    '@media(max-width: 600px)': {
        textAlign: 'center',
        marginTop: '20px',
    },
}


function Footer() {
    return (
        <>
            <Box sx={container}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={leftSide}>
                            <div style={{marginBottom: '40px'}}>
                                <Typography sx={{fontSize: '32px'}}>I'm ready to bring some magic to the team.</Typography>
                            </div>
                            <div style={{fontSize: '30px', color: '#FFBC28'}}>
                                Feel free to reach out, I'm always on
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={{display: 'none'}} sm={.5} />
                    <Grid item xs={12} sm={5}>
                        <Box sx={rightSide}>
                            <div>
                                <Typography sx={{marginBottom: '24px', fontSize: '1rem', opacity: '50%'}}>Information</Typography>
                                <Typography sx={{fontSize: '1.1rem', opacity: '55%'}}>Redmond, Washington</Typography>
                                <Typography sx={{fontSize: '1.3rem'}}>mikeytwheeler@gmail.com</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid> 
            </Box>
            <TitleBar pos={''} />
            <div style={{backgroundColor: '#2b2b2b', height: '70px'}} />
        </>
    )
}

export default Footer;