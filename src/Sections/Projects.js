import React from 'react'
import CardDisp from '../components/CardDisp/CardDisp.js';
import { Typography } from '@mui/material';
import theme from '../hooks/theme';


const container = {
	padding: '40px 6% 100px',
    '@media(max-width: 500px)': {
        padding: '40px 2% 100px',
    }
}

function Projects() {
	return (
		<div>
			<div style={container}>
				<Typography sx={theme.typography.bigTabPanelHeader}>Projects</Typography>
				<CardDisp />
			</div>
		</div>
	)
}

export default Projects;
