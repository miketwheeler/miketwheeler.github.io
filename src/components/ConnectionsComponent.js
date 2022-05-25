import React from 'react';
import MessageModal from "./MessageModal.js"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


const pillBoxContainer = {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: '0 14px',
}
const pillButtonStyle = {
    alignSelf: 'center',
    color: 'white',
    opacity: '40%',
    borderRadius: '50px',
    height: 20,
    margin: '0 4px',
    '&:hover': {
        opacity: '90%'
    }
}
const modalPosition = {
    margin: 'auto auto',
}

function buttonAction(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

function ConnectionsComponent() {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={pillBoxContainer}>
                <Button 
                    sx={pillButtonStyle}
                    size="small"
                    startIcon={<GitHubIcon />}
                    onClick={() => buttonAction('https://github.com/miketwheeler')}
                    >
                        GitHub
                </Button>
                <Button 
                    sx={pillButtonStyle}
                    size="small"
                    startIcon={<LinkedInIcon />}
                    onClick={() => buttonAction('https://linkedin.com/in/michaeltwheeler')}
                    >
                        LinkedIn
                </Button>
            </Box>
            {/* Removed for app brevity */}
            <div style={modalPosition}>
                <MessageModal id="message-modal" color="inherit" />
            </div>
        </div>
    )
}

export default ConnectionsComponent;