import React, { Component } from 'react';
import Modal from './Modal';
import EditForm from './EditForm';
import DeleteBook from './DeleteBook';

import { Wrapper, EditButton, DeleteButton, AddButton } from '../styled/Buttons.styled';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { deletePopup: false, editModalState: false };
  }

  toggleEditModal = () => this.setState({ editModalState: !this.state.editModalState });

  toggleDeletePopup = () => this.setState({ deletePopup: !this.state.deletePopup });

  render() {
    const { book } = this.props;
    return (
      <Wrapper>
        <EditButton onClick={() => this.toggleEditModal()}>Edit</EditButton>
        <DeleteButton onClick={() => this.toggleDeletePopup()}>Delete</DeleteButton>
        <Modal isOpen={this.state.editModalState}>
          <EditForm toggleModal={this.toggleEditModal} book={book} />
        </Modal>
        <Modal isOpen={this.state.deletePopup}>
          <DeleteBook id={book.id} toggleDeletePopup={this.toggleDeletePopup} />
        </Modal>
      </Wrapper>
    );
  }
}

export default Buttons;
