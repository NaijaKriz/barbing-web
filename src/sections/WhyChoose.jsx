import React, { useEffect } from 'react'
import Choose from '../assets/whychoose.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const WhyChoose = () => {
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
      <section id="about" className="w-full px-4 lg:px-10 md:px-20 py-10 md:py-20 flex flex-col md:flex-row
              justify-center items-center gap-20 bg-cover bg-center" style={{backgroundImage:`url(${Choose})`}}>
                <div data-aos='zoom-in' className="flex flex-col justify-center items-center gap-10 bg-white p-4 md:p-10 rounded-xl md:w-[40%]
                w-full">
                  <h1 className="text-[#a69f7d] text-3xl md:text-4xl font-bold">WORKING HOURS</h1>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-xl text-black font-lg">MONDAY - FRIDAY: 8AM - 8PM</p>
                    <p className="text-xl text-black font-lg">SATURDAY: 9AM - 8PM</p>
                    <p className="text-xl text-black font-lg">SUNDAY: 11AM - 7PM</p>
                  </div>
                  <button data-aos="zoom-in" className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg
                hover:bg-black hover:text-white cursor-pointer">BOOK ONLINE</button> 
                </div>

                <div data-aos="slide-up" data-aos-delay="200" className="md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit">
                  <h1 className="text-6xl text-white font-bold text-center">
                    Why Choose Us
                  </h1>
                  <p className="text-white text-2xl font-semibold text-center md:text-start">
                    We are a team of professional barbers who are passionate about providing the best service to our customers. 
                    Our team has over 10 years of experience in the industry and we are committed to providing a high-quality 
                    service that exceeds our customers' expectations.
                  </p>
                  <div id="icon-list" className="flex flex-col justify-center items-start gap-4">
                    <div id="icon-box" className="flex justify-center items-center gap-3">
                      <FaAngleDoubleRight className='text-white size-6' />
                      <h1 className='text-xl text-white font-semibold'>
                        Professional and experienced barbers
                      </h1>
                      
                    </div>
                    <div id="icon-box" className="flex justify-center items-center gap-3">
                      <FaAngleDoubleRight className='text-white size-6' />
                      <h1 className='text-xl text-white font-semibold'>
                        High-quality products and equipment
                      </h1>
                      
                    </div>
                    <div id="icon-box" className="flex justify-center items-center gap-3">
                      <FaAngleDoubleRight className='text-white size-6' />
                      <h1 className='text-xl text-white font-semibold'>
                        Excellent customer service
                      </h1>
                      
                    </div>
                    <div id="icon-box" className="flex justify-center items-center gap-3">
                      <FaAngleDoubleRight className='text-white size-6' />
                      <h1 className='text-xl text-white font-semibold'>
                        Clean and comfortable environment
                      </h1>
                      
                    </div>
                  </div>
                </div>
      </section>
    </>
  )
}

export default WhyChoose