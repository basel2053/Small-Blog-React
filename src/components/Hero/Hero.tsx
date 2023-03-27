import { useEffect, useState } from 'react';
import './Hero.css';

const text = ['Developers', 'Innovators', 'Learners'];

function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTextIndex(prevState => (prevState >= 2 ? 0 : prevState + 1));
    }, 4000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className='hero min-h-[50vh] bg-primary justify-start px-[3%] border-b border-b-slate-600 border-t border-t-slate-600'>
      <div className='hero-content py-20'>
        <div className='text-white '>
          <div className='bg-primary overflow-hidden'>
            <span className='relative text-white text-6xl 2xl:text-7xl font-bold mr-4 font-mono'>For</span>
            <span className='relative text-gray-700 text-6xl 2xl:text-7xl font-bold before:absolute before:top-[0%] before:left-[0%] before:h-full before:w-full before:bg-primary before:border-l-2 before:border-l-yellow-500 my-animation font-mono'>
              {text[textIndex]}
            </span>
          </div>
          <p className='pt-6 text-xl mb-4'>
            <span className='font-bold '> Discover</span> the joy of reading.
          </p>
          <p className=' text-xl mb-4'>
            <span className='font-bold '> Sharing</span> new ideas.
          </p>
          <p className='pb-6 text-xl mb-4'>
            <span className='font-bold'> Follow</span> amazing stories.
          </p>
          <button className='btn text-xl px-8'>Start Journey</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
