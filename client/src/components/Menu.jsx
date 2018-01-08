import React from 'react';
import styled from 'styled-components';

import AddBook from './AddBook';
import Modal from 'react-modal';

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

const AddButton = styled.button`
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  margin-top: 10px;
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 0px;
  color: white;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 0;
  width: 1300px;
  margin: 0 auto;
  background: #1d1e20;
`;

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
