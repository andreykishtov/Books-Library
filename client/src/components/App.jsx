import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { booksRequest } from '../redux/actions/book';
import Book from './Book';

const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 1300px;
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr;
  grid-gap: 10px;
  background: #1d1e20;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

class App extends Component {
  componentWillMount = () => this.props.dispatch(booksRequest());

  render() {
    const { books } = this.props;
    return books ? (
      books.length > 1 && <Wrapper>{books.map(book => <Book key={book.id} book={book} />)}</Wrapper>
    ) : (
      <div>loading</div>
    );
  }
}

const mapStateToProps = state => state.books;

export default connect(mapStateToProps)(App);
