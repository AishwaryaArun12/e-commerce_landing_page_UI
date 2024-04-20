import React from 'react'
import Helmets from './Helmets'
import helmet1 from '../assets/helmet1.jpg'
import helmet2 from '../assets/helmet2.jpg'
import helmet3 from '../assets/helmet3.jpg'
import helmet4 from '../assets/helmet4.jpg'

const ThirdBlock = () => {
  return (
    <div>
      <h1 className='text-center font-semibold text-6xl py-16'>Our Best Products</h1>
      <div className='flex justify-center flex-wrap'>
        <Helmets image={helmet3} price={29.90}/>
        <Helmets image={helmet2} price={50.90}/>
        <Helmets image={helmet3} price={29.90}/>
        <Helmets image={helmet2} price={60.90}/>
        <Helmets image={helmet3} price={29.90}/>
        <Helmets image={helmet2} price={29.90}/>
      </div>
    </div>
  )
}

export default ThirdBlock
