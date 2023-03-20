import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const id = setTimeout(() => {
      query ? setSearchParams({ query }) : setSearchParams();
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [query]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

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
              value={query}
              onChange={changeHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
