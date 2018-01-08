import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editBook } from '../redux/actions/book';
import { Form, Header, InputBox, InputLabel, Save, Cancel } from '../styled/EditForm.styled';
import { showError } from '../redux/actions/modal';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', publishedDate: '' };
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

    if (this.checkTitle(title)) {
      return;
    }
    title = this.correctString(title);

    author = this.correctString(author);

    this.props.onEdit(this.props.book.id, title, author, publishedDate);
    this.props.toggleModal();
  };

  checkTitle(title) {
    const TitleExists = this.props.books.filter(book => book.volumeInfo.title === title);
    if (TitleExists.length) {
      this.props.errorMessage(`This Title name: "${title}" already exists`);
      return true;
    }
    return false;
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>Edit Book</Header>
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
            type="date"
            title={this.state.publishedDate}
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

const mapStateToProps = state => {
  return state.books;
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (id, title, author, publishedDate) => {
      dispatch(editBook(id, title, author, publishedDate));
    },
    errorMessage: message => {
      dispatch(showError(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
