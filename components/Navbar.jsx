import React from 'react';
import Link from 'next/link';
import { RiCompass3Line, RiBuildingLine } from 'react-icons/ri'

const Navbar = () => {
	return (
		<div className='w-full mb-4'>
			<div className='p-4 flex justify-between items-center'>
				<div className=''>
					<div className='tracking-[4px] font-[300] bg-[#fff] py-2'>
						HEADLESS
					</div>
					<div className='tracking-[2px] bg-transparent mt-[-20px] -z-10'>
						COMMERCE
					</div>
				</div>
				
				<div className='flex justify-between text-gray-500 tracking-[0px]' >
					<div className='flex hover:text-black mr-6'>
						<Link className='text-2xl flex items-center mr-1' href='/'><RiCompass3Line/>
							<div className='ml-2 text-base'>Categories</div>
						</Link>
					</div>
					
					<div className='flex hover:text-black'>
						<Link className='text-2xl flex items-center mr-1' href='/'><RiBuildingLine/>
						<div className='ml-2 text-base'>Agencies</div>
						</Link>
					</div>
				</div>
			</div>

			<div className='px-6 mt-3 text-center'>
				<h1 className='bg-gradient-to-br from-[#580663] via-[#a324af] to-[#f42b2b] text-transparent bg-clip-text text-[50px]'>Build your next commerce stack</h1>
				<p className='mt-5 text-lg text-gray-400 px-[120px] lg:mt-8'>A community curated list of commerce products, services, podcasts, books, and more. A heads-up for modern store builders.</p>
				<button className='mt-6 text-gray-600 hover:text-black lg:mt-10'>Learn more</button>
			</div>

		</div>
	);
}

export default Navbar;
