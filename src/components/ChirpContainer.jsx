import React from 'react';
import Chirp from './Chirp';

class ChirpContainer extends React.Component {

    render (){
        return (<div className="border rounded m-4 col-10 mx-auto">
            <Chirp />
        </div>
        )
        
    }

};

export default ChirpContainer;