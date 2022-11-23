import React from 'react';
import { RiLayoutGridFill, RiListUnordered } from 'react-icons/ri'

const Filter = () => {
	return (
		<div className='px-4 border-t-2'>
			<div className='flex items-center py-8 border-b-2 justify-between'>
				<div>
					<input className='border-solid border-2 border-gray-300 rounded-md p-2 w-[70vw] md:w-[80vw] lg:w-[80rem]' type="text" placeholder='Filter by category' />
				</div>
				<div className='flex cursor-pointer'>
					<div className='text-xl p-3'>
						<RiLayoutGridFill/>
					</div>
					<div className='text-xl p-3'>
						<RiListUnordered />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;