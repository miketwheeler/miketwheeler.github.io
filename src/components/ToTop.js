import React from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(380px, 960px)',
    gridTemplateAreas: 'button',
    bottom: 10,
    zIndex: 300,
    position: 'fixed',
}
const buttonStyle = {
    color: '#FFBC28',
    padding:'1px',
    float: 'right',
    right: 40,
    boxShadow: '0 5px 10px #2b2b2b',
    zIndex: 110,
    gridArea: 'button',
}
const tooltipStyle = {
    color: '#FFBC28',
    backgroundColor: '#2b2b2b',
    boxShadow: '1px 2px 6px #2b2b2b'
}
const arrowChevron = {
    transform: 'rotate(180deg)',
    fontSize: 60,
}

const scrollItToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ToTop() {
    return (
        <div style={containerStyle}>
            <Tooltip title="Back to Top" sx={tooltipStyle} placement='left' arrow PopperProps={tooltipStyle}>
                <IconButton sx={buttonStyle} onClick={scrollItToTop}>
                    <ExpandCircleDownOutlinedIcon sx={arrowChevron} />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default ToTop;