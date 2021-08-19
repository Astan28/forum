import { combineReducers } from "redux";
import sectionReducer from './sectionReducer';

export default combineReducers({
    sections: sectionReducer
})