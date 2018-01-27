import React from 'react';
import Time from './Time';

const Chirp = (props) => {

    let chirpList = props.chirp.map((chirpArr, timeArr) => {
        return (
            <div key={timeArr} className="mx-auto col-10 mt-2 mb-2 d-flex border rounded p-4 align-items-start" >
                <h5  className="font-weight-light">{chirpArr.value}
                    <Time />
                </h5>


            </div>
        )
    })

    return (
        <div className="mx-auto">
            {chirpList}
        </div>
    )
};

export default Chirp;
