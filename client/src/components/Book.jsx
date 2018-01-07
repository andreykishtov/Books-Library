import React from 'react';
import { Wrapper, Title, PublishDate, Author, Image } from '../styled/Book.styled';

const Book = ({ book }) => (
  <Wrapper key={book.id}>
    <Title>{book.title}</Title>
    <Image src={book.image} alt="book" />
    <PublishDate>{book.publishedDate}</PublishDate>
    <Author>{book.author}</Author>
  </Wrapper>
);

export default Book;
