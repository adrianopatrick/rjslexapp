import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <nav className="navbar-default navbar-static-side">
        <ul className="nav">
            <li>
                <Link to="/"><i className="fa fa-th-large" /><span>Principal</span></Link>
            </li>
            <li><Link to="/painel/atendimento"><i className="fa fa-child" /><span>Acolhimento</span></Link></li>
            <li><Link to="/painel/atendimento"><i className="fa fa-desktop" /><span>Atendimento</span></Link></li>
            <li><Link to="/painel/atendimento"><i className="fa fa-calendar" /><span>Agenda</span></Link></li>
            <li><Link to="/painel/atendimento"><i className="fa fa-gavel" /><span>Processo</span></Link></li>
            <li><Link to="/painel/atendimento"><i className="fa fa-dollar" /><span>Financeiro</span></Link></li>
            <li><Link to="/painel/atendimento"><i className="fa fa-gears" /><span>Administração</span></Link></li>
        </ul>
    </nav>
);

export default Menu;