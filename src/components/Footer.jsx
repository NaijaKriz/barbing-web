import React from 'react'
import { FaArrowUp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section id="" className="bg-slate-200 w-full md:px-20  sm:px-4 md:py-20  py-10 flex flex-col justify-center items-center 
        gap-6 border-[20px] border-[#a69f7d]">
          <h1 className="text-black font-bold text-5xl">Barber <span className='italic text-[#a69f7d]'>Shop</span></h1>
          
          <div id='icons' className="flex justify-center items-center gap-4">
            <div id='icons' className="bg-[#a39466] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white 
              transform hover:scale-110 transition-transform duration-300">
                <FaFacebookF className='size-7 fill-white'/>
            </div>
            <div id='icons' className="bg-[#a39466] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white 
              transform hover:scale-110 transition-transform duration-300">
                <FaTiktok className='size-7 fill-white'/>
            </div>
            <div id='icons' className="bg-[#a39466] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white 
              transform hover:scale-110 transition-transform duration-300">
                <FaYoutube className='size-7 fill-white'/>
            </div>
            <div id='icons' className="bg-[#a39466] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white 
              transform hover:scale-110 transition-transform duration-300">
                <FaInstagram className='size-7 fill-white'/>
            </div>
          </div>
          <p className='text-lg text-center font-semibold text-slate-600'>
            Designed and Developed by ChrisDotJs <br />&copy; 2024 Barber Shop. All rights reserved.
          </p>
    </section>
    <div data-aos='slide-right' data-aos-delay='200' className="bg-[#a69f7d] p-4 rounded-full hover:bg-black text-white cursor-pointer 
    fixed  lg:bottom-8 bottom-4 right-4">
      <Link to="hero" smooth={true} spy={true}  >
        <FaArrowUp className='size-8'/>
      </Link>
    </div>
    </>
  )
}

export default Footer