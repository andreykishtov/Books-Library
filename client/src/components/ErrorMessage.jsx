import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideError } from '../redux/actions/modal';
import styled from 'styled-components';

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

const Title = styled.h2`
  color: white;
`;

const Button = styled.button`
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  background: #27282a;
  text-align: center;
  padding: 20px;
`;

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
