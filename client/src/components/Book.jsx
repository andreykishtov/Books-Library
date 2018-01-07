import React from 'react';
import { Wrapper, Title, PublishDate, Author, Image } from '../styled/Book.styled';

const Book = ({ book }) => (
  <Wrapper key={book.id}>
    <Title>{book.volumeInfo.title}</Title>
    <Image src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
    <PublishDate>{book.volumeInfo.publishedDate}</PublishDate>
    <Author>{book.volumeInfo.authors[0]}</Author>
  </Wrapper>
);

export default Book;
