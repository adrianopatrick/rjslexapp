import React from 'react';

import './input.css';

class Input extends React.Component {

    render() {
        let type = this.props.type || 'text';
        return (
            <div className="group">
                <input type={type} required onChange={this.props.onChange}/>
                <span className="highlight"/>
                <span className="bar"/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

export default Input;