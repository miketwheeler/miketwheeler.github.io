import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import MyCardStyle from './MyCardStyle.module.css';
import GetGif from '../../GifComponents/GetGif.js';
import { Grid } from "@mui/material";
import theme from '../../hooks/theme';
import LilLogos from '../../components/LilLogos.js';


const fancyButtonStyle = {
	backgroundColor: 'transparent',
	color: '#FFBC28',
	border: '1px solid #FFBC28'
}
const highlightCont = {
	border: '1px solid #3b3b3b74',
	backgroundColor: '#3b3b3b74',
	borderRadius: '18px',
	padding: '18px',
	minWidth: '320px'
}
const featuredWrapper = {
	border: '3px solid black',
	borderImageSlice: 1,
	borderWidth: '2px 0 0 40px',
	borderImageSource: 'linear-gradient(to bottom right, #2b2b2b, transparent, transparent)',
	position: 'relative',
	padding: '18px',
}
const featuredHeader = {
	color: 'white',
	textTransform: 'uppercase',
	letterSpacing: 3,
	fontWeight: 800,
	position: 'absolute',
	top: 48,
	left: 0,
	marginLeft: "-82px",
	transform: 'rotate(270deg)',
	transformOrigin: '(0 0)',
	marginRight: 40,
}
const tinyFadedText = {
	opacity: '40%',
	wordSpacing: '3px',
	margin: '10px 0 0',
}
const featuredTitleBarStyle = {
	margin: 'auto auto 20px', 
	flexDirection: 'row',
	flexWrap: 'wrap',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-end'
}
const featuredGifContainerStyle = {
	margin: '0 auto 20px',
	'@media(max-width: 700px)': {
		"&:hover": {
			transform: 'scale(1.5)',
			zIndex: 100,
			transition: 'all ease-in-out 280ms',
			boxShadow: '0px 2px 6px rgba(75, 75, 75, 0.527)'
		}
	}
}

function buttonAction(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}


const MyCard = ({ ...props }) => {

	return (
		<>
			{
				// IF featured, featured render -> else is a standard cardStyle
				props.spec
				?
				<div style={highlightCont}>
					<Grid container sx={featuredWrapper}>
						<h3 style={featuredHeader}> 
							Featured
						</h3>
						<Grid item xs={10} sx={featuredTitleBarStyle}>
							<Typography sx={theme.typography.stressedOpaqueHeader}>
								{props.cardTitle}
							</Typography>
							<LilLogos logos={props.logos} />
						</Grid>
						<Grid item xs={10} sx={featuredGifContainerStyle}>
							<GetGif props={props.gifId} />
						</Grid>
						<Grid item xs={10} sx={{margin: '0 auto'}}>
							{props.cardDescription}
						</Grid>
						<Grid item xs={10} sx={{margin: '40px auto 0'}}>
							<div className={MyCardStyle.textButton}>
								<Button sx={fancyButtonStyle} onClick={() => buttonAction(props.linkTo)}>
									<Typography>
										See The Code
									</Typography>
								</Button>
							</div>
						</Grid>
					</Grid>
				</div>
				:
				// Standard project card render
				<div className={MyCardStyle.main}>
					<div className={MyCardStyle.textContent}>
						<Typography	sx={theme.typography.yellowHeader}>
							{props.cardTitle}
						</Typography>
						<Typography noWrap={false} sx={tinyFadedText}>
							{props.cardDescription}
						</Typography>
					</div>
					<div className={MyCardStyle.textButton}>
						<Button sx={fancyButtonStyle} onClick={() => buttonAction(props.linkTo)}>
							<Typography>
								See The Code
							</Typography>
						</Button>
						<div>
							<LilLogos logos={props.logos} />
						</div>
					</div>
					<div className={MyCardStyle.media}>
						<GetGif props={props.gifId} />
					</div>
				</div>
			}
		</>
	)
}

export default MyCard;
