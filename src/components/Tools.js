import React from 'react';
import ContentStyles from './Layout/ContentLayout.module.css';
import data from '../hooks/data';



function Tools({which}) {
    return (
        <>
			{
				which === 'tools'
				?
					data.toolsList.map((item) => (
						<a key={item.key} title={item.title} href={item.link} target="_blank" rel="noreferrer">
							<img className={ContentStyles.icon} width="64" alt={item.altName} src={item.searchIcon} />
						</a>
					))
				:
					data.langsList.map((item) => (
						<a key={item.key} title={item.title} href={item.link} target="_blank" rel="noreferrer">
							<img className={ContentStyles.icon} width="64" alt={item.altName} src={item.searchIcon} />
						</a>
					))
			}
		</>
    )
}

export default Tools;