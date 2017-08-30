import {combineReducers} from 'redux';

import loginReducer from './login/reducer';
import painelReducer from './home/reducer';
import acolhimentoReducer from './acolhimento/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    painel: painelReducer,
    acolhimento: acolhimentoReducer
});

export default rootReducer;