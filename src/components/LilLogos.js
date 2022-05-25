import React from 'react'



const barStyle = {
    display: 'flex',
    backgroundColor: '#2b2b2b74',
    border: '1px solid #2b2b2b74',
    borderRadius: '50px',
    width: 'fit-content',
    margin: '4px 0',
    padding: '6px',
    height: 'fit-content'
}
const imgStyle = {
    width: '20px',
    margin: 'auto 5px'
}

function LilLogos({logos}) {
    return (
        <div style={barStyle}>
            {
                logos.map((item, i) => (
                    <img key={i} style={imgStyle} alt='mini-logo' src={item} />
                ))
            }
        </div>
    )
}

export default LilLogos;