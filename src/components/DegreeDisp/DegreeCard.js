import React from 'react'
import Ds from './DegreeStyles.module.css';
import BachelorsDegree from '../../static/images/bachelorsDegree.png';
import CertificateCollege from '../../static/images/certificateCollege.png';
import UdemyBlazorCSharp from '../../static/images/udemyBlazorCSharp.png';
import UdemyDjangoReact from '../../static/images/udemyDjangoReact.png';
import ComingSoon from '../../static/images/comingSoon.png';
import FrontendNucamp from '../../static/images/frontendNucamp.png';
import FullstackNucamp from '../../static/images/fullstackNucamp.png';
import { Typography } from '@mui/material';
import theme from '../../hooks/theme'


const customTinyFaded = {
    opacity: '40%',
    wordSpacing: '3px',
    marginTop: '8px'
}
const getDegree = (certName) => {
    switch(certName){
        case "Degree":
            return BachelorsDegree;
        case "Certificate":
            return CertificateCollege;
        case "BlazorCert":
            return UdemyBlazorCSharp;
        case "DjangoReactCert":
            return UdemyDjangoReact;
        case "FrontendNucamp":
            return FrontendNucamp;
        case "FullstackNucamp":
            return FullstackNucamp;
        default:
            return ComingSoon;
    }
}

function DegreeCard({props}) {
    return (
        <div className={Ds.degreeCardContainer}>
            <div className={Ds.degreeTextSection}>
                <Typography sx={theme.typography.yellowHeader}>
                    {props.source}
                </Typography>
                <i className={Ds.location}>
                    {props.location}
                </i>
                <div className={Ds.dateComplete}>
                    {props.dateComplete}
                </div>
                <Typography sx={customTinyFaded}>
                    {props.blurb}
                </Typography>
            </div>

            {/* Degree Image */}
            <div className={Ds.imageSection}>
                <img 
                    className={Ds.image} 
                    src={getDegree(props.image)} 
                    alt="Certificate of Completion"
                />
            </div>
            
        </div>
    )
}

export default DegreeCard;
