import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { hideError } from '../redux/actions/modal';

const ErrorMessage = ({ message, isOpen, dispatch }) => {
  return (
    <Modal isOpen={isOpen}>
      <h2>Error {message}</h2>
      <button onClick={() => dispatch(hideError())}>Close</button>
    </Modal>
  );
};

function mapStateToProps(state) {
  return { message: state.modal.errorModal.message, isOpen: state.modal.errorModal.isOpen };
}

export default connect(mapStateToProps)(ErrorMessage);
