const Pagination = (props: { page: number; prev: boolean; next: boolean; onPaginate: Function }) => {
  const prevHandler = () => {
    props.onPaginate(props.page - 1);
  };
  const nextHandler = () => {
    props.onPaginate(props.page + 1);
  };
  return (
    <div className='btn-group my-10'>
      <button
        className={`btn hover:bg-primary text-3xl pb-1 ${props.prev ? '' : 'text-gray-600 hover:bg-neutral'}`}
        onClick={prevHandler}
      >
        ‹
      </button>
      <button className='btn lg:text-base'>Page {props.page}</button>
      <button
        className={`btn hover:bg-primary text-3xl pb-1 ${props.next ? '' : 'text-gray-600 hover:bg-neutral'}`}
        onClick={nextHandler}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
