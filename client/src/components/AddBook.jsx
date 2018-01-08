import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/book';

import { Form, Header, InputBox, InputLabel, Save, Cancel } from '../styled/AddBook.styled';

const idCounter = 0;

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '', imageURL: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  checkForString = data => typeof data !== 'string';

  checkData = (title, author, publishedDate, imageURL) => {
    if (this.checkForString(title)) {
      alert('title Must Be a string');
      return false;
    }

    if (this.checkForString(author)) {
      alert('author Must Be a string');
      return false;
    }

    if (this.checkForString(imageURL)) {
      alert('imageURL Must Be a string');
      return false;
    }
    return true;
  };

  correctString(string) {
    return string
      .split(' ')
      .map(word => this.capitalize(word))
      .join(' ');
  }

  capitalize(string) {
    let simpleString = string.replace(/[^A-Za-z0-9]/g, '');
    return simpleString.charAt(0).toUpperCase() + simpleString.slice(1).toLowerCase();
  }

  handleSubmit = event => {
    event.preventDefault();
    let { title, author, publishedDate, imageURL } = this.state;
    if (!this.checkData(title, author, publishedDate, imageURL)) {
      return;
    }
    title = this.correctString(title);
    author = this.correctString(author);
    publishedDate = this.correctString(publishedDate);

    this.props.onAdd({
      id: `mATF${idCounter}eVI${idCounter}IUC`,
      volumeInfo: {
        imageLinks: {
          thumbnail: imageURL
        },
        title: title,
        publishedDate: publishedDate,
        authors: author
      }
    });

    this.props.toggleModal();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Add Book</Header>
        <InputLabel grid-area="Title">
          Title:
          <InputBox
            placeholder="please enter Title"
            name="title"
            type="text"
            title={this.state.title}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <InputLabel grid-area="Author">
          Author:
          <InputBox
            placeholder="please enter Author"
            name="author"
            type="text"
            title={this.state.author}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <InputLabel grid-area="publishedDate">
          Date:
          <InputBox
            placeholder="please enter Date"
            name="publishedDate"
            type="text"
            title={this.state.publishedDate}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <InputLabel grid-area="publishedDate">
          ImageURL:
          <InputBox
            placeholder="please enter Date"
            name="ImageURL"
            type="text"
            title={this.state.imageURL}
            onChange={this.handleChange}
            required
          />
        </InputLabel>
        <Save type="submit" title="Save" />
        <Cancel onClick={this.props.toggleModal}>Cancel</Cancel>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: book => {
      dispatch(addBook(book));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddBook);
