import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.value = '';
        this.keyHandle = this.keyHandle.bind(this);
        this.getValue = this.getValue.bind(this);
        this.resetValue = this.resetValue.bind(this);
    }

    keyHandle(event) {
        this.value = event.target.value;
        if(this.props.onChange) this.props.onChange(event);
        console.log('Input: '+this.value);
    }

    getValue() {
        console.log('get')
        return this.value;
    }

    resetValue(){
        console.log('reset')
        this.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" value={this.value} onChange={this.keyHandle}/>
            </div>
        )
    }
}

export default Input;

