import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.keyHandle = this.keyHandle.bind(this);
        this.resetValue = this.resetValue.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    keyHandle(event) {
        console.log('Login: ' + event.target.value);
        this.setState({...this.state, value: event.target.value}, () => console.log('login: ' + this.state.value))
    }

    resetValue() {
        this.children.resetValue();
        this.setState({...this.state, value: this.children.getValue()});
    }


    getValue() {
        return this.children.getValue();
    }

    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                {React.cloneElement(this.props.children, {onChange: this.keyHandle, ref: (input) => this.children = input})}
                <button onClick={() => console.log(this.getValue())}>Pegar</button>
                <button onClick={this.resetValue}>Zerar</button>
            </div>
        )
    }
}

export default Login;