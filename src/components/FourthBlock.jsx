import React from 'react'
import image9 from '../assets/image9.jpg'
import helmet3 from '../assets/helmet3.jpg'

const FourthBlock = () => {
  return (
    <div className='flex'>
        <div className='mt-56 mx-10 w-3/5 h-svh rounded-full'>
           <img src={image9} className='h-full w-96 pt-5 rounded-full' alt="" />
        </div>
        <div>
            <div className='flex pt-10 mt-28'>
                <h1 className=' text-2xl mt-16 ml-3'>
                    Which means that your heart, Diode visor and lings all perspir and experience increased.
                </h1>
                <img className='w-52 h-56 rounded-full mx-16' src={helmet3} alt="" />
            </div>
            <div>
                <h1 className='text-6xl mt-3 font-semibold leading-tight'>
                    Make Everyday Extraordinary for your journey
                </h1>
                <h1 className='text-lg text-gray-500 my-10 mr-36'>
                    Our bikes are statements you can drive daily. Take a Penny to work, to the 
                    gym, for a meetup with friends, You'll be rolling in style.
                </h1>
            </div>
        </div>
      
    </div>
  )
}

export default FourthBlock
