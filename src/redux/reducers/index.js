import {reducer as formReducer} from 'redux-form';
//import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;