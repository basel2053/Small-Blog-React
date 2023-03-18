const CardWrapper = () => {
	return (
		<section className='flex flex-row flex-wrap mx-auto justify-center my-10'>
			{Array(12)
				.fill(1)
				.map(ele => (
					<div className='transition-all duration-150 flex  w-full px-4 py-6 md:w-1/2 lg:w-[32%] '>
						<div className='flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl'>
							<div className='md:flex-shrink-0'>
								<img
									src='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png'
									alt='Blog Cover'
									className='object-fill w-full rounded-lg rounded-b-none md:h-56'
								/>
							</div>
							<div className='flex items-center justify-between px-4 py-2 overflow-hidden'>
								<span className='text-xs font-medium text-primary-focus uppercase'>Web Programming</span>
								<div className='flex flex-row items-center'>
									<div className='text-xs font-medium text-gray-500 flex flex-row items-center mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-4 h-4 mr-1'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
											/>
										</svg>
										<span>9 minutes read</span>
									</div>
								</div>
							</div>
							<hr className='border-gray-300' />
							<div className='flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto'>
								<a href='#' className='hover:underline'>
									<h2 className='text-2xl font-bold tracking-normal text-gray-800'>Ho to Yawn in 7 Days</h2>
								</a>
							</div>
							<hr className='border-gray-300' />
							<p className='flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni fugiat, odit incidunt
								necessitatibus aut nesciunt exercitationem aliquam id voluptatibus quisquam maiores officia sit amet
								accusantium aliquid quo obcaecati quasi.
							</p>
							<hr className='border-gray-300' />
							<section className='px-4 py-2 mt-2'>
								<div className='flex items-center justify-between'>
									<div className='flex items-center flex-1'>
										<img
											className='object-cover h-10 rounded-full'
											src='https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'
											alt='Avatar'
										/>
										<div className='flex flex-col mx-2'>
											<a href='' className='font-semibold text-gray-700 hover:underline'>
												Fajrian Aidil Pratama
											</a>
											<span className='mx-1 text-xs text-gray-600'>28 Sep 2020</span>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				))}
			{/* <!-- Card Component --> */}
		</section>
	);
};

export default CardWrapper;
