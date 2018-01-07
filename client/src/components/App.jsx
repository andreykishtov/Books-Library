import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentWillMount = async () => {
    try {
      const response = await axios.get('http://localhost:4000/books');
      this.setState({ books: response.data[0].items });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { books } = this.state;
    return books.length && <Wrapper>{books.map(book => <Book key={book.id} book={book} />)}</Wrapper>;
  }
}

export default App;
