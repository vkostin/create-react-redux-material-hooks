import {History} from "history";
import {combineReducers} from "redux";
import selectable from './selectable/reducer';

export default (history) =>
    combineReducers({
        selectable,
    });
