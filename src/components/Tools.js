import React from 'react';
import data from '../hooks/data';

const iconStyle = {
	margin: '15px 15px 0px 15px'
}

function Tools({which}) {
    return (
        <>
			{
				which === 'tools'
				?
					data.toolsList.map((item) => (
						<a key={item.key} title={item.title} href={item.link} target="_blank" rel="noreferrer">
							<img style={iconStyle} width="64" alt={item.altName} src={item.searchIcon} />
						</a>
					))
				:
					data.langsList.map((item) => (
						<a key={item.key} title={item.title} href={item.link} target="_blank" rel="noreferrer">
							<img style={iconStyle} width="64" alt={item.altName} src={item.searchIcon} />
						</a>
					))
			}
		</>
    )
}

export default Tools;