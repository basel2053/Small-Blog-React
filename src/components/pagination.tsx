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
        className={`btn hover:bg-primary text-3xl pb-1 disabled:text-gray-600 disabled:bg-neutral active:bg-neutral`}
        onClick={prevHandler}
        disabled={!props.prev}
      >
        ‹
      </button>
      <button className='btn lg:text-base'>Page {props.page}</button>
      <button
        className={`btn hover:bg-primary text-3xl pb-1 disabled:text-gray-600 disabled:bg-neutral active:bg-neutral`}
        onClick={nextHandler}
        disabled={!props.next}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
