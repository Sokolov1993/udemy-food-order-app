import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import stylesModal from './Modal.module.scss';

const Backdrop = ({ onHideCart }) => {
  return <div onClick={onHideCart} className={stylesModal.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={stylesModal.modal}>
      <div className={stylesModal.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onHideCart }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </Fragment>
  );
};

export default Modal;
