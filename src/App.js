import React from 'react';
import Login from './login/Login';
import Input from './login/Input';

export default props => (
    <div>
        <Login value="meu login">
            <Input ref="input" onChange={this.keyHandle}/>
        </Login>
    </div>
)