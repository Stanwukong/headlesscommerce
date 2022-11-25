import React from 'react';
import Link from 'next/link';
import { RiCompass3Line, RiBuildingLine, RiLayoutGridFill, RiChatNewLine } from 'react-icons/ri'
import { ImStack } from 'react-icons/im'

const Navbar = () => {
	return (
		<div className='w-full mb-4'>
			<div className='p-4 flex items-center relative lg:pt-6'>
				<div>
					<div className='text-lg'>
						<div className='font-[300] bg-[#fff]'>
						<p className='tracking-[3px]'>HEADLESS</p>
						</div>
						
						<div className='bg-transparent -mt-3'>
						<p>COMMERCE</p>	
						</div>
					</div>
				</div>
				
				<p className='mx-7 text-4xl font-thin text-gray-300 hidden'>|</p>

				<div className='flex text-gray-500 text-[15px] lg:flex' >

					<div className='flex ml-3 lg:ml-'>
						<div className='hover:text-black mr-6 hidden md:flex'>
							<Link className=' flex items-center mr-1' href='/'><RiLayoutGridFill/>
							<p className='ml-2'>Discover</p>
							</Link>
						</div>

						<div className='flex hover:text-black mr-6'>
							<Link className=' flex items-center mr-1' href='/'><RiCompass3Line/>
								<p className='ml-2 '>Categories</p>
							</Link>
						</div>
						
						<div className='flex hover:text-black'>
							<Link className='flex items-center mr-1' href='/'><RiBuildingLine/>
							<p className='ml-2 '>Agencies</p>
							</Link>
						</div>
					</div>
						
						<div className='items-center absolute right-0 hidden md:flex md:pr-3'>
							<Link className='flex items-center hover:text-gray-900' href='/'><ImStack/><p className='ml-2'>My Stack</p></Link>
							<Link className='flex items-center hover:text-gray-900 ml-3 py-1 px-2 bg-gray-100 rounded-md' href='/'><RiChatNewLine/><p className='ml-2'>Suggest</p></Link>
						</div>
					
				</div>
			</div>

			<div className='px-6 mt-3 text-center tracking-tight md:py-[100px]'>
				<h1 className='bg-gradient-to-br from-[#580663] via-[#a324af] to-[#f42b2b] text-transparent bg-clip-text font-bold text-[25px] md:px-10 md:text-7xl'>Build your next commerce stack</h1>
				<p className='mt-5 text-base text-gray-400 md:px-[40px] md:text-xl lg:mt-8'>A community curated list of commerce products, services, podcasts, books, and more. A heads-up for modern store builders.</p>
				<button className='mt-6 text-gray-500 hover:text-black md:text-sm'>Learn more</button>
			</div>

		</div>
	);
}

export default Navbar;
