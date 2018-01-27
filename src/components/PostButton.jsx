import React from 'react';

class PostButton extends React.Component {
    handleClick(e){
        const chirp = e.target.value;
        this.props.postChirp(chirp);
    }

    render (){
        // console.log('button rendered');
        return <button  onClick={this.handleClick.bind(this)} className="btn-lg col-12 bg-primary mt-2 mb-2 text-white">Post!</button>;
        
    }

};

export default PostButton;