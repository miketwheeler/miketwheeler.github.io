import React from 'react'
import { Typography } from '@mui/material';
import theme from '../../hooks/theme'


const degreeCardContainer = {
    display: 'flex',
    padding: '18px',
    margin: '18px auto',
    borderBottom: '1px dotted #010101',
}
const degreeTextSection = {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
}
const topRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
}
const location = {
    fontWeight: 'bolder',
    marginBottom: '10px',
}
const dateComplete = {
    paddingBottom: '8px',
}


function DegreeCard({props}) {
    return (
        <div style={degreeCardContainer}>
            <div style={degreeTextSection}>
                <div style={topRow}>
                    <Typography sx={theme.typography.yellowHeader}>
                        {props.source}
                    </Typography>
                    <Typography sx={dateComplete}>
                        {props.dateComplete}
                    </Typography>
                </div>
                <i style={location}>
                    {props.location}
                </i>
                <Typography sx={theme.typography.tinyFaded}>
                    {props.blurb}
                </Typography>
            </div>
        </div>
    )
}

export default DegreeCard;
