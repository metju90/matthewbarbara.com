import { combineReducers } from 'redux';
import about from './about';
import contact from './contact';
import highlights from './highlights';
import portfolio from './portfolio';

export default combineReducers({
    about,
    contact,
    highlights,
    portfolio
});
