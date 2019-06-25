import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import subjectsReducer from './subjectsReducer';
import authReducer from './authReducer';
import teachersReducer from './teachersReducer';
import userInfoReducer from './userInfoReducer';
import groupsReducer from './groupsReducer';
import studentsReducer from './studentsReducer'
import todosReducer from './todosReducer'

export default combineReducers({
    routing: routerReducer,
    subjectsReducer,
    authReducer,
    teachersReducer,
    userInfoReducer,
    groupsReducer,
    studentsReducer,
    todosReducer,
});