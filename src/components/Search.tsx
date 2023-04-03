import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstRender, setFirderRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirderRender(false);
      return;
    }
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
      <div className='ml-5 sm:ml-6 md:ml-10 lg:ml-14 2xl:ml-20'>
        <h2 className='mt-10 text-4xl font-bold mb-10'>Discover Articles</h2>
        <div className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search Keyword…'
              className='input input-bordered input-ghost w-3/4  sm:w-full sm:max-w-md shadow-md font-medium text-lg text-gray-600'
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
