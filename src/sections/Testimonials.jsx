import Aos from 'aos';
import React, { useEffect } from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import megan from '../assets/megan.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'

const Testimonials = () => {

  const clients = [
    {
      image: megan,
      name: "John Doe",
      title: "Great service and friendly staff!, ",
    },
    {
      image: jack,
      name: "Jane Smith",
      title: "I love my new haircut!,the best",
    },
    {
      image: simon,
      name: "Mike Johnson",
     title: "Highly recommend this barber.",
    },
  ];


  useEffect(() => {
        Aos.init({
          duration: 800,
          offset: 200,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
  return (
    <section id='testimonials' className="w-full md:px-20 md:h-[165vh] h-fit px-4 py-20 flex flex-col 
      justify-end items-center gap-16 bg-[#a69f7d]">
      <h1 data-aos="zoom-in" className="text-6xl font-bold text-white text-center">What Our Clients Say</h1>
      <p data-aos="zoom-in" className="text-white text-center font-semibold">
        Hear what our satisfied clients have to say about their experience with us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6">
        {clients.map((client, index)=>(
          <div data-aos='slide-up' data-aos-display='200' id='main-box' key={index} className="
             w-full bg-white p-14 flex flex-col justify-between items-center relative gap-6 rounded-3xl">
              <div id='top' className="flex justify-between items-center  gap-6 w-full">
                <div className="flex justify-center items-center gap-4 relative">
                  <BiSolidQuoteAltLeft className='size-20 text-[#1caf7e] left-0 opacity-20 absolute'/>
                  <h1 className="text-2xl text-black font-bold">{client.name}</h1>
                </div>
                
              </div>
              <img src={client.image} alt="" className='border-4 border-[#1caf7e] absolute top-3 right-3 rounded-full w-[50px] h-[50px]'/>
              <div className="w-full">
                <p className='text-end text-gray-600 font-medium'>{client.title}</p>
              </div>
             </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials