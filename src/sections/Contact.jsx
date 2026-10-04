import Aos from 'aos';
import React, { useEffect } from 'react'
import contactimg from '../assets/24.jpeg'

const Contact = () => {
  useEffect(() => {
          Aos.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-sine',
            delay: 100,
          });
        }, [])
  return (
    <section id="contact" className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start">
      <div data-aos="zoom-in" id='img-box' className="w-full bg-cover bg-center bg-no-repeat h-[700px]" style={{background: `url(${contactimg})`}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63610.49758683994!2d6.964341041141329!3d4.828978857440437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRoad%206%2C%202nd%20Avenue%20New%20Road%20by%20AdaGeorge%2C%20Portharcourt%2C%20Rivers%20State!5e0!3m2!1sen!2sng!4v1769813344862!5m2!1sen!2sng" className='border-0 h-[700px] w-[650px]' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div id='form-inbox' className="bg-gray-900 p-4 md:p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]">
          <h1 data-aos='zoom-in' data-aos-delay='200' className="text-white text-6xl font-bold text-center">Contact Us</h1>
          <div data-aos='zoom-in' data-aos-delay='400' id='form' className="w-full flex flex-col justify-center items-center gap-4">
            <input type="text" placeholder='Enter Your Full Name' className='w-full p-4 text-black font-semibold bg-white' />
            <input type="email" placeholder='Enter Your Valid Email' className='w-full p-4 text-black font-semibold bg-white' />
            <textarea name="" id="" cols='30' rows='5' className='bg-white w-full p-3' placeholder='Enter Your Message Here....'></textarea>
            <input type="submit" value='SUBMIT' className='bg-[#a69f7d] hover:bg-[#92843b] cursor-pointer w-full font-semibold text-lg text-black p-3'/>
          </div>
        </div>
    </section>
  )
}

export default Contact