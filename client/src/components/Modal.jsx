import React from 'react';
import { Wrapper, BackDrop } from '../styled/Modal.styled';

const Modal = ({ onClose, children, isOpen }) =>
  isOpen && (
    <div>
      <Wrapper>{children}</Wrapper>
      <BackDrop />
    </div>
  );

export default Modal;
