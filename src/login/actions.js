import {logar} from '../home/actions';

export const iniciarLogin = () => ({
    type: 'INICIAR_LOGIN'
});

export const efetuarLogin = (login, senha) => {
    return logar(login, senha);
};