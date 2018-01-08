import React from 'react';

import AddBook from './AddBook';
import Modal from 'react-modal';
import { AddButton, Title, Wrapper } from '../styled/Menu.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: '0',
    transform: 'translate(-50%, -50%)',
    background: '#27282a'
  }
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AddPopup: false };
  }

  toggleAddPopup = () => this.setState({ AddPopup: !this.state.AddPopup });

  render() {
    return (
      <Wrapper>
        <Modal style={customStyles} isOpen={this.state.AddPopup}>
          <AddBook toggleModal={this.toggleAddPopup} />
        </Modal>
        <Title>Books Library</Title>
        <AddButton onClick={() => this.toggleAddPopup()}>Add</AddButton>
      </Wrapper>
    );
  }
}

export default Menu;
