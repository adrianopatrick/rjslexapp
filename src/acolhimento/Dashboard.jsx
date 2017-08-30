import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {consultarClientes} from "./actions";

import InputForm from "../templates/input/InputForm";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {filtro: null};
    }

    render() {
        return (
            <div className="form-content animated fadeInRight">
                <div className="form-header">Dashboard acolhimento</div>
                <div>
                    <InputForm value={this.state.filtro} label="Pesquisar" onChange={e => this.setState({...this.state, filtro: e.target.value})} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filtro: state.acolhimento.filtro
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        consultarClientes
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);