import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <nav>
        <ul>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/painel/atendimento">Atendimento</Link></li>
        </ul>
    </nav>
);

export default Menu;