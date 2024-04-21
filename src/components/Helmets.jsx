import React from 'react'

const Helmets = ({image,price}) => {
  return (
    <div className='p-4'>
      <div className='bg-gray-100 rounded-full w-72 h-72 lg:w-96 lg:h-96 p-16'>
      <img src={image} alt="" className='rounded-full w-64 h-64 object-contain'/>
      </div>
      <h1 className='text-3xl p-4 text-center font-semibold'>Poc Cycling Helmets</h1>
      <p className='text-xl text-center font-semibold'>${price}0</p>
    </div>
  )
}

export default Helmets
