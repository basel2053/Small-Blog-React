import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const Modal = (props: { children: React.ReactNode }) => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('root-backdrop') as HTMLElement)}
      {createPortal(props.children, document.getElementById('root-modal') as HTMLElement)}
    </>
  );
};

export default Modal;
