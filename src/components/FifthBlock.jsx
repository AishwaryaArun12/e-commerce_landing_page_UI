import React from 'react'
import image5 from '../assets/image5.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'

const FifthBlock = () => {
  return (
    <div className='bg-black relative p-3 py-12 mt-12 hidden lg:block'>
        <div className='flex flex-wrap justify-center mt-6'>
            <img src={image9} alt="" className='h-screen rounded-3xl w-72 m-3'/>
            <img src={image8} alt="" className='h-screen rounded-3xl w-72 m-3'/>
            <img src={image9} alt="" className='h-screen rounded-3xl w-72 m-3'/>
            <img src={image5} alt="" className='h-screen rounded-3xl w-72 m-3'/>
        </div>
        <div className='m-24 absolute bottom-8'>
    <span className='bg-black rounded-3xl text-white text-6xl px-6 py-3 '>Ride Your Bike to heaven</span><br />
    <span className='bg-black rounded-3xl text-white text-6xl px-6 py-0 ' style={{ lineHeight: '1.2' }}>with us</span>
</div>


      
    </div>
  )
}

export default FifthBlock
