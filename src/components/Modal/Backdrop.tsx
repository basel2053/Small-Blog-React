const Backdrop = (props: { onCloseModal?: React.MouseEventHandler }) => {
  return (
    <div className='w-screen h-screen fixed z-30 top-0 left-0 bg-black opacity-50' onClick={props.onCloseModal}></div>
  );
};

export default Backdrop;
