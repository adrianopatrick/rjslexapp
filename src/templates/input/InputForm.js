import React from 'react';

import './inputForm.css';

class InputForm extends React.Component {

    render() {
        let type = this.props.type || 'text';
        return (
            <div className="group">
                <input className="input" type={type} required onChange={this.props.onChange}/>
                <span className="highlight"/>
                <span className="bar"/>
                <label className="label">{this.props.label}</label>
            </div>
        );
    }
}

export default InputForm;