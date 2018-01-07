import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../redux/actions/book';

import { Form, Header, InputBox, InputLabel, Save, Cancel } from '../styled/AddBook.styled';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '', ImageURL: '' };
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  checkForString = data => typeof data !== 'string';

  checkData = (title, author, publishedDate) => {
    if (this.checkForString(title)) {
      alert('title Must Be a string');
      return false;
    }

    if (this.checkForString(author)) {
      alert('author Must Be a string');
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
    let { title, author, publishedDate } = this.state;
    if (!this.checkData(title, author, publishedDate)) {
      return;
    }
    title = this.correctString(title);
    author = this.correctString(author);
    publishedDate = this.correctString(publishedDate);

    this.props.onAdd(title, author, publishedDate);
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
            title={this.state.ImageURL}
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
    onAdd: (title, author, publishedDate) => {
      dispatch(addBook({ title, author, publishedDate }));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddBook);
