import React from 'react';

import './button.css';

class Button extends React.Component {

    render(){
        return (
            <button className="btn" type="button"><span>{this.props.name}</span></button>
        );
    }
}

export default Button;