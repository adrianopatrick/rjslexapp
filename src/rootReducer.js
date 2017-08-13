import {combineReducers} from 'redux';

import loginReducer from './login/reducer';
import painelReducer from './home/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    painel: painelReducer
});

export default rootReducer;