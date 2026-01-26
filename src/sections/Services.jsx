import Aos from 'aos';
import React, { useEffect } from 'react'
import services1 from '../assets/6.webp'
import scissors from '../assets/scissors2.png'
import menshair from '../assets/3.jpeg'
import womenshair from '../assets/serv2.png'
import trimmer from '../assets/serv1.png'

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 200,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <section id='services' className="w-full px-4 lg:px-10 md:px-20 py-10 md:py-20 flex flex-col justify-center items-center gap-16 bg-gray-900">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 data-aos='zoom-in' className="text-6xl text-white font-bold text-center">
          Barbershop Services
        </h1>
        <p data-aos='zoom-in' className="text-xl text-slate-200 text-center">
          We offer a wide range of services to meet your grooming needs. Our professional barbers are skilled in the latest techniques and styles to ensure you leave our shop looking and feeling your best.
        </p>
      </div>

      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div id="image-box">
          <img data-aos='zoom-in' data-aos-delay='200' src={services1} alt="" />
        </div>

        <div className="grid grid-cols-1 justify-center items-center gap-8 md:grid-cols-2">
          <div data-aos="zoom-out" data-aos-delay="200"
            className="bg-white flex py-8 flex-col justify-center items-center gap-3 rounded-xl">
            <img src={scissors} alt="" className="size-16 transform transition-transform duration-300 cursor-pointer hover:scale-110" />
            <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="200"
            className="bg-white flex py-8 flex-col justify-center items-center gap-3 rounded-xl">
            <img src={menshair} alt="" className="size-16 transform transition-transform duration-300 cursor-pointer hover:scale-110" />
            <h1 className="text-black text-[25px] font-bold">Beard Care</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="200"
            className="bg-white flex py-8 flex-col justify-center items-center gap-3 rounded-xl">
            <img src={trimmer} alt="" className="size-16 transform transition-transform duration-300 cursor-pointer hover:scale-110" />
            <h1 className="text-black text-[25px] font-bold">Hair Colouring</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="200"
            className="bg-white flex py-8 flex-col justify-center items-center gap-3 rounded-xl">
            <img src={womenshair} alt="" className="size-16 transform transition-transform duration-300 cursor-pointer hover:scale-110" />
            <h1 className="text-black text-[25px] font-bold">Braid Locks</h1>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services