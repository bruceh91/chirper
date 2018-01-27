import React from 'react';

const Chirp = (props) => {
    console.log('third');
    let chirpList = props.chirp.map((chirpArr, timeArr)=> {
        return <h5 key={timeArr}  className="mx-auto col-10 mt-4 mb-4 d-flex border rounded p-4 align-items-start font-weight-light">{chirpArr.value}</h5>
    })
        return (
            <div className="mx-auto">
               {chirpList} 
            </div>
        )
    };

export default Chirp;
