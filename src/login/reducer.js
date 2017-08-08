let INITIAL_STATE = {
    mensagem: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'INICIAR_LOGIN':
            return {...state, mensagem: 'Bem vindo!'};
        default:
            return state;
    }
}