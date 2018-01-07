import { combineReducers } from 'redux';
import books from './books';

const todoApp = combineReducers({
  books
});

export default todoApp;
