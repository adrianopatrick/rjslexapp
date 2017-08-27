import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "selected" : "";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side">
                <ul className="nav">
                    <li>
                        <div />
                        <Link to="/"><i className="fa fa-th-large"/><span>Principal</span></Link></li>
                    <li>
                        <div className={this.activeRoute("/acolhimento")} />
                        <Link to="/painel/acolhimento"><i className="fa fa-coffee"/><span>Acolhimento</span></Link></li>
                    <li>
                        <div className={this.activeRoute("/atendimento")}/>
                        <Link to="/painel/atendimento"><i className="fa fa-desktop"/><span>Atendimento</span></Link>
                    </li>
                    <li>
                        <div className={this.activeRoute("/agenda")}/>
                        <Link to="/painel/agenda"><i className="fa fa-calendar"/><span>Agenda</span></Link></li>
                    <li>
                        <div className={this.activeRoute("/processo")}/>
                        <Link to="/painel/processo"><i className="fa fa-gavel"/><span>Processo</span></Link></li>
                    <li>
                        <div className={this.activeRoute("/financeiro")}/>
                        <Link to="/painel/financeiro"><i className="fa fa-bank"/><span>Financeiro</span></Link></li>
                    <li>
                        <div className={this.activeRoute("/admin")}/>
                        <Link to="/painel/admin"><i className="fa fa-gears"/><span>Administração</span></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;