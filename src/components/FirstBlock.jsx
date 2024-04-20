import React from 'react'
import { BsSearch } from 'react-icons/bs';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image4 from '../assets/image4.avif'
import image3 from '../assets/image3.avif'
import image5 from '../assets/image8.jpg';
import image6 from '../assets/images6.jpg';
import image7 from '../assets/images7.jpg';
import { Progress } from "flowbite-react";
import { Avatar } from "flowbite-react";

const FirstBlock = () => {
  return (
    <div className=' lg:flex mb-12 '>
        <div className='w-6/12 ml-10 pl-1'>
          <h1 className=' text-6xl font-semibold mt-9 p-2 pt-3 text-pretty leading-tight'>Discovering the Undiscovered Charms.</h1>
          <p className='p-2 text-lg text-zinc-500 mr-8'>Provider in Yogyakarta with a sustainable tourism concept, delivering meaningful journey 
            through cycling tours.
          </p>
          <div>
            <div className='flex border rounded-full ml-2 mr-16 my-8 shadow pr-2 p-1 border-black'>
                <BsSearch className='ml-5 m-3 mt-4 mr-0' size={23}/>
            <input type="text" placeholder='Search on Product'  className='border-none'/>
            <div className='ml-auto'>
            <button className='bg-gray-900 rounded-full px-5 my-3 py-1 mr-2 text-gray-100'>Search</button>
            </div>
            </div>
            <div className='flex'>
                <img src={image1} className='w-56 rounded-3xl h-48 m-3' alt="" />
                <img src={image2} className='w-56 rounded-3xl h-48 m-3' alt="" />
            </div>
          </div>
          
        </div>
        <div className='w-5/12 pr-5 pb-9 mb-5'>
        <div className='mt-12 bg-gray-50 rounded-2xl h-full'>
            <img src={image4} className='h-full p-8 pb-0 rounded-full' alt="" />
        </div>
            
        </div>
        <div className='w-3/12 h-11 mr-16 mx-3'>
        <div className='mt-12 bg-gray-50 rounded-2xl h-40'>
            <img src={image5} className='h-44 w-64 p-4 rounded-full' alt="" />
        </div>
        <div>
            <p className='px-1  text-xl py-2'>Provider in Yogyakarta with a meaningful journey through cycling tours.</p>
        </div>
        <div className='border border-black rounded-full my-4 ml-2 pl-1 w-1/2'>
            <button className='px-2'>Explore More</button>
        </div>
        <h1 className=' text-4xl m-3 mt-7 font-bold'>4.9</h1>
        <h3 className='text-lg m-3 font-semibold'>Our Customer Rating</h3>
        <Progress color='dark' className='w-10/12 text-black ml-3 my-6' progress={45} />
        <div className="flex flex-wrap gap-2 ml-2">
      <Avatar.Group>
        <Avatar img={image6} className='m-1' rounded stacked />
        <Avatar img={image7}  className='p-2' rounded stacked />
        <Avatar img={image6} className='p-1' rounded stacked />
        <Avatar img={image7} className='p-2' rounded stacked />
        <Avatar img={image6} className='p-1' rounded stacked />
        <Avatar img={image7} className='p-1' rounded stacked />
      </Avatar.Group>
      </div>
      <div>
            <p className='px-1  text-xl py-2'>Provider in Yogyakarta with a meaningful journey.</p>
        </div>
        <div className='border border-black rounded-full my-4 ml-2 pl-1 w-1/2'>
            <button className='px-2'>Explore More</button>
        </div>
        </div>
      
    </div>
  )
}

export default FirstBlock
