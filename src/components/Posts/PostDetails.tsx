import PostAuthor from './PostAuthor';

const PostDetails = () => {
  return (
    <>
      <div className='absolute bg-neutral text-white font-medium clipped-note py-1 pr-10 pl-2 top-[16%]'>
        <h4>9 minutes</h4>
      </div>
      <div className='mx-16 my-10 flex flex-col items-center'>
        <h2 className='text-center text-3xl mb-4'>
          How to call a function <span className='text-gray-600 text-2xl'>|</span>
          <span className=' text-2xl text-primary-focus'> WEB PROGRAMMING</span>
        </h2>
        <h4 className='text-center text-gray-400 mb-10'>28 Sep 2023</h4>
        <div className='text-center  mb-10 pb-4'>
          <img src='https://picsum.photos/900/400' alt='title' className='rounded inline-block' />
        </div>
        <p className='height leading-7 px-[8%] text-gray-600 first-letter:text-gray-800 mb-10 text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nisi ab, accusantium deleniti quis illum nemo,
          velit dolorum minus error consequuntur expedita ea, deserunt omnis eum vero nostrum! Distinctio enim odio
          quisquam itaque quibusdam! Atque adipisci odio eligendi, debitis quisquam quidem quasi expedita nobis qui,
          quis inventore consectetur! Reiciendis, officiis eum dicta maxime qui numquam ducimus. Odio dolores hic
          repudiandae came, corrupti nostrum modi quos atque. Optio, distinctio quisquam quae necessitatibus ipsa
          provident ad dolorem tempora repellendus, quis eius harum officiis came debitis aliquid quam numquam labore
          rem eos adipisci, repudiandae nostrum soluta ipsum. Explicabo odio recusandae reiciendis saepe laboriosam
          neque provident deserunt ipsum vero temporibus assumenda odit expedita itaque illo dolorum quae incidunt rerum
          qui, sequi fuga consequuntur voluptas tempora. Ullam, illum qui. Ad illum fuga laboriosam quaerat culpa amet
          iusto animi, illo dignissimos aliquam, eum architecto quam soluta molestias quia hic odit possimus vitae
          obcaecati magni ducimus. Consequatur ab ratione quia, eligendi, deleniti molestiae quasi quidem provident
          eveniet ipsa ipsam come? Rem molestiae vero perspiciatis laudantium minima magnam ipsum error laboriosam
          aliquid facere modi, veniam ex aliquam eos vitae doloribus came suscipit assumenda eius consequuntur corporis
          nihil qui! Perferendis dolorem reprehenderit fuga asperiores cameque similique beatae. Vero incidunt culpa
          nobis doloribus nostrum, quaerat ex praesentium laboriosam porro? Quisquam itaque ratione iusto sunt saepe
          tempora id fugiat aut numquam quos sapiente nisi earum, odio exercitationem omnis labore corrupti nulla ut
          voluptas distinctio ipsa magni accusamus cameque sed. Sunt hic dicta, veniam vel similique dolore, delectus
          libero eaque impedit quibusdam voluptatibus quos nostrum reiciendis tenetur? Quo deleniti distinctio
          dignissimos, obcaecati eveniet, minima error mollitia cameque quibusdam asperiores dicta
        </p>
        <PostAuthor />
      </div>
    </>
  );
};

export default PostDetails;
