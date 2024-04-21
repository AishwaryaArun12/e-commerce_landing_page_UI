import React from 'react'
import Row from './Row'
import image2 from '../assets/image2.jpg'

const SecondBlock = () => {
  return (
    <div className='my-2 pb-4 bg-black lg:h-screen'>
       <h1 className=' text-white text-center font-semibold text-3xl lg:text-6xl py-16'>Ride Your Cycle to Heaven With Us</h1>
       <div className=' flex justify-center space-y-5 flex-wrap'>
        <Row num={'01'} image={image2}/>
        <Row num={'02'} image={image2}/>
        <Row num={'03'} image={image2}/>
        <Row num={'04'} image={image2}/>
       </div>
    </div>
  )
}

export default SecondBlock
