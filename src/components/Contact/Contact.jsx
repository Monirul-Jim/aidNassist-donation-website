'use client'
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'
import { FaTelegramPlane } from 'react-icons/fa';
import Lottie from 'react-lottie';
import contact from '../../../public/Gallery/contact.json'

const Contact = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qymata3', 'template_l9b11q2', form.current, '27auYAxRn2wcbS3p9')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Sent your Messege Successfully',
            'You clicked the button!',
            'success'
          )
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    }



    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: contact,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
       <div className='my-10'>
        <div ><h1 className="text-center text-5xl font-serif text-gray-600 mb-5">Contact Us</h1></div>
         <div className='lg:flex gap-20 justify-center items-center'>
            <div className='lg:w-[500px] w-96 h-96 lg:h-[500px] rounded-xl'>
            <Lottie  options={defaultOptions}/>
            </div>
         <div className='ms-10 lg:ms-0'>
  <form className='w-96 justify-center mt-3' ref={form} onSubmit={sendEmail}>
      <div className='font-bold text-green-400 mt-2'><label>Name</label></div>
      <div className=''><input className='w-72 border rounded-xl border-green-400  p-2'  type="text" name="user_name"/></div>
      <div className='font-bold text-green-400'><label>Email</label></div>
      <div><input className='w-72 border rounded-xl border-green-400  p-2 text-black'  type="email" name="user_email" /></div>
      <div className='font-bold text-green-400'><label>Message</label></div>
      <div><textarea className='w-72 h-48 border rounded-xl border-green-400  p-2'  name="message" /></div>
      <span className='bg-green-400 p-3 text-white rounded-xl mt-3 flex items-center  w-72 justify-center'><FaTelegramPlane /> <input className='ms-2'  type="submit" value="Send" /></span>
    </form>
      </div>
     </div>
       </div>
    );
};

export default Contact;