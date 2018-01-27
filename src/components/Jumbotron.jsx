import React from 'react';
import logo from '../assets/birdy.png';


class Jumbotron extends React.Component {

    render() {

        return (
            <div className="jumbotron jumbotron-fluid m-0 p-0 bg-dark">
                <div className="container text-center">
                    <img src={logo} className="center-block img-responsive" alt="logo" />
                    <h1 className="mx-auto text-light">Welcome to Chirper</h1>
                </div>
            </div>
        )
    }
}


export default Jumbotron;
