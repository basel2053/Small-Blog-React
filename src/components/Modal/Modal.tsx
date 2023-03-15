import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const Modal = () => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('root-backdrop') as HTMLElement)}
      {createPortal(<ModalOverlay />, document.getElementById('root-modal') as HTMLElement)}
    </>
  );
};

export default Modal;
