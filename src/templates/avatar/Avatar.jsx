import React from 'react';
import './avatar.css';

const Avatar = (props) => {

    const siglaNome = (nome) => {
        let partes = nome.split(" ");
        let sigla = partes[0].charAt(0).toUpperCase();
        if (partes.length > 1) {
            sigla += partes[partes.length - 1].charAt(0).toUpperCase();
        } else {
            sigla += partes[0].charAt(1).toUpperCase();
        }
        return sigla;
    };

    return (
        <div className="avatar">
            <div className="avatar-circle">
                <span className="avatar-initials">{siglaNome(props.value)}</span>
            </div>
            <div className="avatar-username">{props.value}</div>
            <div className="avatar-role">IT analyst</div>
        </div>
    )
};

export default Avatar;