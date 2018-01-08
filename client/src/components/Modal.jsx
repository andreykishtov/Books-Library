import React from 'react';
import { Wrapper, BackDrop } from '../styled/Modal.styled';

const Modal = ({ onClose, children, isOpen, zIndex }) =>
  isOpen && (
    <div>
      <Wrapper zIndex={zIndex || 150}>{children}</Wrapper>
      <BackDrop />
    </div>
  );

export default Modal;
