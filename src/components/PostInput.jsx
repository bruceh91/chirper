import React from 'react';

class PostInput extends React.Component {
    handleChange(e){
        const input = e.target.value;
        const temp = {value: input}
        this.props.changeInput(temp);
    }

    render (){
        return <input 
        onChange={this.handleChange.bind(this)}
        placeholder="What's happening?" 
        className="mt-2 col-12 border rounded p-2 mb-2 mt-3">
        </input>;
        
    }

};

export default PostInput;
