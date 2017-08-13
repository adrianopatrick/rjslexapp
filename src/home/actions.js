export const logar = (login, senha) => ({
    type: 'USER_AUTHENTICATED',
    payload: {login: login}
});