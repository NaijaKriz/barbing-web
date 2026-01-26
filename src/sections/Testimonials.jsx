import Aos from 'aos';
import React, { useEffect } from 'react'

const Testimonials = () => {

  const clients = [
    {
      image: '',
      name: "John Doe",
      feedback: "Great service and friendly staff!, ",
    },
    {
      image: '',
      name: "Jane Smith",
      feedback: "I love my new haircut!",
    },
    {
      image: '',
      name: "Mike Johnson",
      feedback: "Highly recommend this barbershop.",
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
    <section className="w-full md:px-20 md:h-[165vh] h-fit px-4 py-20 flex flex-col justify-center items-center gap-16 bg-[#a69f7d]">
      <h1 data-aos="zoom-in" className="text-6xl font-bold text-white text-center">What Our Clients Say</h1>
      <p className="text-white text-center">
        Hear what our satisfied clients have to say about their experience with us.
      </p>
    </section>
  )
}

export default Testimonials