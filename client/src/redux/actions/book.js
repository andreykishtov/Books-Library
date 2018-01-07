import axios from 'axios';

import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '../constants/books';

export const getBooks = () => ({ type: GET_BOOKS });
export const getBooksSuccess = books => ({ type: GET_BOOKS_SUCCESS, payload: { books } });
export const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  payload: { error }
});

export const booksRequest = (url = 'http://localhost:4000/books') => async dispatch => {
  dispatch(getBooks());

  try {
    const books = await axios.get(url);
    dispatch(getBooksSuccess(books));
  } catch ({ response: { status } }) {
    dispatch(getBooksFailure(status));
  }
};
