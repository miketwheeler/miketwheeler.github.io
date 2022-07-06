import React from 'react';
import MyCard from './MyCard.js';
import data from '../../hooks/data';


const container = {
	height: '100%',
	width: '100%',
	margin: '0 auto',
	'@media(maxWidth: 700px)': {
		margin: 0
	}
}

function CardDisp() {
	// maps out the data into individual cards
	return (
		<div style={container}>
			{
				data.projectCardList.map((item, i) => (
					<div key={i}>
						{
							i === 0
							? 
							<MyCard 
								spec={true}
								gifId={item.gifId}
								imageTitle={item.imageTitle}
								cardTitle={item.cardTitle}
								cardDescription={item.cardDescription}
								linkTo={item.projectLink}
								sitelink={item.sitelink}
								logos={item.logoList}
							/>
							:
							<MyCard 
								spec={false}
								gifId={item.gifId}
								imageTitle={item.imageTitle}
								cardTitle={item.cardTitle}
								cardDescription={item.cardDescription}
								linkTo={item.projectLink}
								sitelink={item.sitelink}
								logos={item.logoList}
							/>
						}
					</div>
				))
			}
		</div>
	)
}

export default CardDisp;