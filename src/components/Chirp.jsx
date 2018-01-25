import React from 'react';

class Chirp extends React.Component {

    render (){
        return (
            <h5 className="mx-auto m-4 d-flex align-items-start font-weight-light"> THIS IS CHIRP {this.props.input}</h5>
        )
        
    }

};

export default Chirp;
