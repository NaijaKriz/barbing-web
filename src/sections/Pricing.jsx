import Aos from 'aos';
import React, { useEffect } from 'react'

const Pricing = () => {
  useEffect(() => {
      Aos.init({ 
      duration: 800,
      offset: 200,
      easing: 'ease-in-sine',
      delay: 100,
        });
    }, [])
  return (
    <section id='pricing' className="w-full px-4 lg:px-10 md:px-20 py-10 md:py-20 flex flex-col justify-center items-center gap-24">
      <h1 data-aos="zoom-in" className="text-6xl font-bold text-black text-center">Our Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-20 w-[85%]">
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Haircut</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$20</p>
        </div>
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Beard Trim</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$15</p>
        </div>
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Haircut + Beard Trim</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$30</p>
        </div>
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Hair Coloring</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$50</p>
        </div>
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Women Haircut</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$25</p>
        </div>
        <div data-aos="zoom-in" className="flex justify-between items-center gap-6 border-b-2 border-[#a69f7d]">
          <h1 className="text-xl font-bold">Shaving</h1>
          <p className="text-xl font-bold text-[#a69f7d]">$10</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing