const Search = () => {
  return (
    <>
      <div className='ml-14'>
        <h2 className='mt-10 text-4xl font-bold mb-10'>Discover Articles</h2>
        <div className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search Keyword…'
              className='input input-bordered input-ghost w-full max-w-md shadow-md font-medium text-lg text-gray-600'
            />
          </div>
        </div>
        {/* <input
          type='text'
          placeholder='Search Keyword'
          className='input input-bordered input-primary w-full max-w-md shadow-md '
        /> */}
      </div>
    </>
  );
};

export default Search;
