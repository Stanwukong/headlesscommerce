import Link from 'next/link';
import { title } from 'process';
import React from 'react';
import { tools } from './data';


const Tools = () => {
	

	  const tool = tools.map(tool =>
		<div className=''>
			<div className='bg-[#fff] border border-gray-200 text-gray-400 relative p-7 rounded-lg justify-center my-5 hover:bg-gradient-to-r from-red-600 to-purple-500'>
				
					<Link href={tool.url}>	
						<p className='absolute top-3 right-3'>
								{tool.tag.map(target => (
								<span className='rounded-xl border  text-[12px] p-1 ml-2 '>{target}</span>))}
						</p>
						
						<div className='flex flex-col relative items-center'>
							<img className='w-[10rem] h-[5rem]' 
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
	  return <ul>{tool}</ul>;
	}
export default Tools;

