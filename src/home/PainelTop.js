import React from 'react';

const PainelTop = (props) => (
    <div>
        <div><i className="fa fa-user-circle" />User: {props.auth.login}</div>
    </div>
);

export default PainelTop;