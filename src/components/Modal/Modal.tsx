import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';

const Modal = (props: { children: React.ReactNode; handleClose?: React.MouseEventHandler }) => {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={props.handleClose} />,
        document.getElementById('root-backdrop') as HTMLElement
      )}
      {createPortal(props.children, document.getElementById('root-modal') as HTMLElement)}
    </>
  );
};

export default Modal;
