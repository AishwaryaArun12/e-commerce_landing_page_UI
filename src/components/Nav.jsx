import React from 'react'
import { Avatar,  Navbar ,Dropdown} from "flowbite-react";
import 'react-dropdown/style.css'; // Import default styles for the dropdown
import { FaBars ,FaBell, FaShoppingCart} from 'react-icons/fa';
import logo from '../assets/logo.avif';
import { IoNotificationsOutline, IoCartOutline } from 'react-icons/io5';
import me from '../assets/me.jpeg';

const Nav = () => {
  return (
    <Navbar className=' border border-b-gray-200 border-b-2 p-2' fluid rounded>
    
    <Navbar.Collapse>
    <div className='sm:hidden lg:block pl-10 pt-1'><FaBars size={18} className=' font-thin pb-0'/></div>
      <Navbar.Link href="#" active className=' text-base'>
        Home
      </Navbar.Link>
      <Navbar.Link href="#" className=' text-base'>Shop</Navbar.Link>
      
    </Navbar.Collapse>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src={logo} className="mr-3 h-6 sm:h-9 rounded-lg" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white ">CYCLE</span>
    </Navbar.Brand>
    <div className="flex md:order-2 pr-8">
    <div className='border rounded-full m-2 border-gray-300'>
        <IoNotificationsOutline className='w-12 h-12 rounded-full p-3 ' alt="" />
      </div>
      <div className="relative border rounded-full m-2 border-gray-300">
            <IoCartOutline className="w-12 h-12 rounded-full p-3" />
            
                <span className="absolute top-4 right-3 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-4 w-4 bg-red-500 text-white rounded-full text-xs">
                    2
                </span>
        </div>
      <div>
        <img src={me} className='w-16 h-16 rounded-full p-2' alt="" />
      </div>
      
    </div>
    
  </Navbar>
  )
}

export default Nav
