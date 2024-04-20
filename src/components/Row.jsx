import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Row = ({num,image}) => {
  return (
    <div className=' bg-white w-72 mr-5 p-4 pr-2  rounded-3xl'>
        <div className='flex p-2'>
            <div className='text-5xl font-semibold mr-auto'>{num}</div>
            <div className='border w-12 h-12  border-gray-300 rounded-full align-middle p-2'>
            <AiOutlineArrowRight color='black' size={26} style={{ transform: 'rotate(320deg)' }} />
            </div>
            
        </div>
        <div className='py-4'>
                The cycle routes quiz volutes sit aspirator aut oddity aut fugit
            </div>
            <div className='rounded-full object-contain'>
                <img src={image} alt="" className=' rounded-3xl h-48 pr-2 pb-1'/>
            </div>
      
    </div>
  )
}

export default Row
