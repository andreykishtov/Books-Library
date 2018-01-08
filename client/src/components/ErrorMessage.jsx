import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideError } from '../redux/actions/modal';

import { Button, Title, Wrapper } from '../styled/ErrorMessage.styled';

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

const ErrorMessage = ({ message, isOpen, dispatch }) => {
  return (
    <Modal style={customStyles} isOpen={isOpen}>
      <Wrapper>
        <Title>Error {message}</Title>
        <Button onClick={() => dispatch(hideError())}>Ok</Button>
      </Wrapper>
    </Modal>
  );
};

function mapStateToProps(state) {
  return { message: state.modal.errorModal.message, isOpen: state.modal.errorModal.isOpen };
}

export default connect(mapStateToProps)(ErrorMessage);
