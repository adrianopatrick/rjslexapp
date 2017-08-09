import React from 'react';

import './input.css';

class Input extends React.Component {

    render() {
        return (
            <div className="group">
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

export default Input;