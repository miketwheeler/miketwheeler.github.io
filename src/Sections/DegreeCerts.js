import React from 'react'
import ContentStyles from '../components/Layout/ContentLayout.module.css';
import DegreeCard from '../components/DegreeDisp/DegreeCard.js';
import data from '../hooks/data';
import { Typography } from '@mui/material';
import theme from '../hooks/theme';



const acreditedWrapper = {
    border: '3px solid',
	borderImageSlice: 1,
	borderWidth: '2px 0 0 40px',
	borderImageSource: 'linear-gradient(to bottom right, #2b2b2b, transparent, transparent)',
    minHeight: '250px',
    position: 'relative',
    padding: '0px 15px',
    marginBottom: '40px',
}
const extracurricularWrapper = {
    border: '3px solid',
	borderImageSlice: 1,
	borderWidth: '2px 0 0 40px',
	borderImageSource: 'linear-gradient(to bottom right, #2b2b2b, transparent, transparent)',
    minHeight: '250px',
    position: 'relative',
    padding: '15px',
}
/* Section Headers */
const acreditedSideHeader = {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: 800,
    position: 'absolute',
    top: '52px',
    left: 0,
    marginLeft: '-88px',
    transform: 'rotate(270deg)',
    transformOrigin: '(0 0)',
}
const extracurricularSideHeader = {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: 800,
    position: 'absolute',
    top: '104px',
    left: 0,
    marginLeft: '-135px',
    transform: 'rotate(270deg)',
    transformOrigin: '(0 0)',
}



function DegreeCerts() {
	return (
		<div>
			<div className={ContentStyles.contentConfig}>
				<Typography sx={theme.typography.bigTabPanelHeader}>Education</Typography>
				<div>
					{/* Acredited Section */}
					<div style={acreditedWrapper}>
						<h3 style={acreditedSideHeader}>
							Acredited
						</h3>
						<DegreeCard props={data.degreeCardData.collegeDegree} />
						<DegreeCard props={data.degreeCardData.collegeCert} />
					</div>
					{/* Extracurricular Section */}
					<div style={extracurricularWrapper}>
						<h3 style={extracurricularSideHeader}>
							Extracurricular
						</h3>
						<DegreeCard props={data.degreeCardData.fullstackNucamp} />
						<DegreeCard props={data.degreeCardData.frontendNucamp} />
						<DegreeCard props={data.degreeCardData.onlineBlazor} />
						<DegreeCard props={data.degreeCardData.onlineReact} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DegreeCerts;