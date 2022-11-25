import Link from 'next/link';
import React from 'react';
import { tools } from './data';


const Tools = () => {
	

	  const tool = tools.map(tool =>
		<div className='group shadow-sm bg-[#fff] relative border-gray-200 text-gray-400 p-7 rounded-md justify-center hover:bg-gradient-to-r from-red-700 to-purple-700 w-[100%] h-[100%] hover:opacity-50'>
			
			<div className=''>
				<div className=''>
					<Link href={tool.url}>	
						<a href="#" className='absolute top-3 right-3'>
								{tool.tag.map(target => (
								<span className='rounded-xl group-hover:bg-transparent group-hover:text-white group-hover:border group-hover:border-white bg-gray-100 text-gray-400 text-[12px] px-2 py-1 ml-2 '>{target}</span>))}
						</a>
						
						<div className='flex flex-col items-center mt-7'>
							<img className='w-[10rem] h-[5rem] rounded-lg' 
								src={tool.icon}
								alt={tool.title}
							/>
							
							<div className='flex flex-col items-center'>
								<p className='text-[#000] font-[600] text-xl my-3'>{tool.title}</p>
								<p className='text-sm text-center'>{tool.text}</p>
							</div>

						</div>
						<div className='absolute justify-center hidden bottom-6 left-[35vw] bg-white'>
							<button>Save to stack</button>
							<button>Visit</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	  );
	  return <ul className='grid gap-4 grid-cols-1 p-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3'>{tool}</ul>;
	}
export default Tools;

