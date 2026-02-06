import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu=()=>{
    setIsMenuOpen(false)
  }
  const navItems =[
    {link : 'Home', path: 'hero'},
    {link : 'About', path: 'about'},
    {link : 'Services', path: 'services'},
    {link : 'Gallery', path: 'gallery'},
    {link : 'Contact', path: 'contact'},
    {link : 'Pricing', path: 'pricing'},
    {link : 'Testimonials', path: 'testimonials'},
  ]
  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-8 px-4
      py-6 sticky top-0 z-110 border-[8px] border-[#a39446]">
      <div id="logo">
        <h1 className="text-white font-bold text-5xl">Barber <span className='italic text-[#a69f7d]'>Shop</span>
      </h1>
      </div>
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map((link, path)=>(
          <Link to={link.path} key={path} className='text-white cursor-pointer p-1 rounded-lg uppercase font-semibold hover:text-[#a69f7d]' smooth={true} spy={true} offset={-100}>{link.link} </Link>
        ))}
      </ul>
      {/*Mobile Menu*/}

      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-2xl text-white cursor-pointer'/> : <FaBars className='text-2xl text-white cursor-pointer' />}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex ' : 'hidden'} w-full h-fit bg-slate-800 absolute p-4 top-[80px] left-0`}>
           <ul className="flex flex-col justify-center items-center gap-2 w-full">
        {navItems.map((link, path)=>(
          <Link to={link.path} key={path} className='text-white cursor-pointer p-1 rounded-lg uppercase font-semibold hover:text-[#a69f7d]' smooth={true} spy={true} offset={-100}>
            {link.link} 
          </Link>
        ))}
      </ul>
        </div>
      </nav>
  )
}

export default Header