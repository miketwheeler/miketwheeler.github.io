import React from 'react'
import { Typography } from '@mui/material';
// import theme from '../../hooks/theme';


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
    color: '#FFBC28',
    fontWeight: 600,
    marginBottom: '8px',
    fontSize: "1.1rem",
    opacity: '90%'
}
const location = {
    fontWeight: 'bolder',
    marginBottom: '10px',
    opacity: '76%'
}
const blurbStyle = {
    opacity: '40%',
    wordSpacing: '3px'
}


function DegreeCard({props}) {
    return (
        <div style={degreeCardContainer}>
            <div style={degreeTextSection}>
                <Typography style={topRow}>
                    <div>
                        {props.what}
                    </div>
                    <div>
                        {props.dateComplete}
                    </div>
                </Typography>
                <i style={location}>
                    {props.source}, {props.location}
                </i>
                <Typography sx={blurbStyle}>
                    {props.blurb}
                </Typography>
            </div>
        </div>
    )
}

export default DegreeCard;
