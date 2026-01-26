import Aos from 'aos';
import React, { useEffect } from 'react'
import gal1 from '../assets/1.jpeg'
import gal2 from '../assets/11.webp'
import gal3 from '../assets/2.jpeg'
import gal4 from '../assets/8.jpeg'
import gal5 from '../assets/9.jpeg'
import gal6 from '../assets/5.jpeg'
import gal7 from '../assets/6.jpeg'
import gal8 from '../assets/7.jpeg'
import gal9 from '../assets/10.jpeg'

const Gallery = () => {
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
      <section className="w-full flex flex-col md:px-20 px-4 h-fit pb-[300px] py-20
          justify-center items-center gap-16 bg-gray-900 -mb-[200px]">
        <h1 className='text-white text-6xl font-bold text-center '>Experienced the best Haircut & <br /> Shaving Services</h1>


        <div className="w-full flex flex-col justify-center items-center">
      <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 
      justify-center justify-items-center items-center gap-10 md:-mb-[540px]">
        <img data-aos="zoom-in" data-aos-delay="200" src={gal1} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal2} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal3} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal4} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal5} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal6} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal7} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal8} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      <img data-aos="zoom-in" data-aos-delay="200" src={gal9} alt="" 
      className="rounded-xl w-[400px] h-[350px]" />
      </div>
    </div>
    </section>
    
    
      
    </>
  )
}

export default Gallery