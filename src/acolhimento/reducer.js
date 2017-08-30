const INITIAL_STATE = {
    filtro: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILTRAR_CLIENTES':
            return {...state, filtro: action.payload};
        default:
            return state;
    }
}