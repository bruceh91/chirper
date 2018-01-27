import React from 'react';

const Time = (props) => {
    const timePosted = 
    `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}
    `;
        
    return (
            <p className="text-muted mt-3 small"><small>{timePosted}</small></p>
        )
    }


export default Time;