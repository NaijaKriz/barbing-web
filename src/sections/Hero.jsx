import React, { use } from 'react'
import scissors from '../assets/scissors2.png'
import heroimg from '../assets/7.jpg'
import menshair from '../assets/3.jpeg'
import womenshair from '../assets/3.png'
import trimmer from '../assets/2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaHeadphones, FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdOutlinePhoneAndroid } from 'react-icons/md'


const Hero = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 800,
            offset: 200,
            easing: 'ease-in-sine',
            delay: 100,

        });
    }, [])
  return (
   <>
    <section id="hero" className='w-full md:px-[120px] px-4 lg:px-10
    flex flex-col md:flex-row justify-center items-center gap-20'>
        <div id='content-box' className=" flex flex-col 
        justify-center items-start gap-4">
            <h1 data-aos="zoom-in" className='text-xl md:text-2xl text-black font-semibold'>WELCOME TO</h1>
            <h1 data-aos="zoom-in" className='text-4xl md:text-6xl text-black font-bold'>Barbershop @ <br /> Ada Geroge <br /> PORTHARCOURT</h1>
            <div data-aos="fade-up" id='icon-list' className="flex flex-col justify-center items-start gap-6">
                <div id="icon-box" className="flex items-center justify-center gap-3">
                    <FaLocationDot size={30} className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>
                        Road 6 New Road by AdaGeorge, Portharcourt, Rivers State
                    </h1>
                </div>
                <div id="icon-box" className="flex items-center justify-center gap-3">
                    <MdOutlinePhoneAndroid size={30} className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>
                        +234 814 920 8959 / +234 704 744 2132
                    </h1>
                </div>
                <div id="icon-box" className="flex items-center justify-center gap-3">
                    <MdEmail size={30} className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>
                        imebachristianinnocent@gmail.com
                    </h1>
                </div>
                <div id="icon-box" className="flex items-center justify-center gap-3">
                    <FaHeadphones size={30} className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>
                        Road 6 New Road, Portharcourt, Rivers State
                    </h1>
                </div>
            </div>
            <button data-aos="zoom-in" className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg
                hover:bg-black hover:text-white cursor-pointer">BOOK ONLINE</button>
        </div>
        <div data-aos='zoom-in' className="" id="image-box md:w-[50%] w-full">
            <img src={heroimg} alt="" className='rounded-xl w-full md:h-[500px] h-[250px]'/>
        </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-4 lg:px-10 py-10 gap-10">
        <div data-aos='zooom-in' data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <img src={scissors} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className="text-2xl text-black font-semibold">Regular haircut</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl cursor-pointer hover:bg-[#a69f7d] hover:text-black">MORE</button>
        </div>
        <div data-aos='zooom-in' data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <img src={menshair} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className="text-2xl text-black font-semibold">Men  haircut</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl cursor-pointer hover:bg-[#a69f7d] hover:text-black">MORE</button>
        </div>
        <div data-aos='zooom-in' data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <img src={trimmer} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className="text-2xl text-black font-semibold">Regular trimmer</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl cursor-pointer hover:bg-[#a69f7d] hover:text-black">MORE</button>
        </div>
        <div data-aos='zooom-in' data-aos-delay="200" className="flex flex-col justify-center items-center gap-4">
            <img src={womenshair} alt="" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className="text-2xl text-black font-semibold">Women haircut</h1>
            <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl cursor-pointer hover:bg-[#a69f7d] hover:text-black">MORE</button>
        </div>
    </section>
   </>

  )
}

export default Hero