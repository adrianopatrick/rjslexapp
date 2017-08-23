let INITIAL_STATE = {
    mensagem: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INICIAR_LOGIN':
            return {...state, mensagem: 'Bem vindo!'};
        case 'LOGIN_IN':
            return {...state, mensagem: ''};
        default:
            return state;
    }
}