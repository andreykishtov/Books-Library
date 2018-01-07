import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '../constants/books';

const initialState = {
  books: [],
  getBooksPending: false,
  getBooksError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, getBooksPending: true };
    case GET_BOOKS_SUCCESS:
      console.log(action.payload.books);
      return {
        ...state,
        books: action.payload.books,
        getBooksPending: false
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        getBooksError: action.payload.error,
        getBooksPending: false
      };
    default:
      return state;
  }
};
