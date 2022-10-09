import React from 'react'
import { Typography } from '@mui/material';


const degreeCardContainer = {
    display: 'flex',
    padding: '18px',
    paddingBottom: '30px',
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
    fontSize: "1.1rem",
    opacity: '90%'
}
const blurbStyle = {
    opacity: '40%',
    wordSpacing: '3px'
}
const bottomRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 4
}
const whiteHeader = {
    paddingBottom: '0px',
}



function DegreeCard({props}) {
    return (
        <div style={degreeCardContainer}>
            <div style={degreeTextSection}>
                <Typography style={topRow}>
                    <div>
                        {props.source}
                    </div>
                    <div>
                        {props.dateComplete}
                    </div>
                </Typography>
                <div style={bottomRow}>
                    <Typography sx={whiteHeader}>
                        {props.what}
                    </Typography>
                    <Typography sx={whiteHeader}>
                        {props.location}
                    </Typography>
                </div>
                <Typography sx={blurbStyle}>
                    {props.blurb}
                </Typography>
            </div>
        </div>
    )
}

export default DegreeCard;
