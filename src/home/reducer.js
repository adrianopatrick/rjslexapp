const INITIAL_STATE = {
    auth: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return {...state, auth: action.payload};
        default:
            return state;
    }
}