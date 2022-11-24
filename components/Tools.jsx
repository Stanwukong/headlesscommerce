import Link from 'next/link';
import React from 'react';
import { tools } from './data';


const Tools = () => {
	

	  const tool = tools.map(tool =>
		<div className=''>
			<div className='group bg-[#fff] border relative border-gray-200 text-gray-400 p-7 rounded-lg justify-center my-5 hover:bg-gradient-to-r from-red-600 to-purple-500 w-[100%] h-[100%] '>
	
					<Link href={tool.url}>	
						<a href="#" className='absolute top-3 right-3'>
								{tool.tag.map(target => (
								<span className='rounded-xl group-hover:bg-transparent bg-gray-100 text-gray-400 text-[12px] px-2 py-1 ml-2 '>{target}</span>))}
						</a>
						
						<div className='flex flex-col items-center mt-5'>
							<img className='w-[10rem] h-[5rem] rounded-lg' 
								src={tool.icon}
								alt={tool.title}
							/>
							
							<div className='flex flex-col items-center'>
								<p className='text-[#000] font-[600] text-xl mb-3'>{tool.title}</p>
								<p className='flex max-w-[50rem]'>{tool.text}</p>
							</div>

						</div>
						<div className='absolute justify-center hidden bottom-6 left-[35vw] bg-white'>
							<button>Save to stack</button>
							<button>Visit</button>
						</div>
					</Link>
				
			</div>
		</div>
	  );
	  return <ul className='lg:w-[100%] grid gap-4 grid-cols-3'>{tool}</ul>;
	}
export default Tools;

