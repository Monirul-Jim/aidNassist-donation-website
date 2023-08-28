// 'use client'
// import React, { useRef } from 'react';

// import emailjs from '@emailjs/browser'
// import { FaTelegramPlane } from 'react-icons/fa';
// import Image from 'next/image';

// import contactimage from '../../../public/Gallery/contact-us-main.gif'
// import Swal from 'sweetalert2';

// const Contact = () => {
//     const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_qymata3', 'template_l9b11q2', form.current, '27auYAxRn2wcbS3p9')
//       .then((result) => {
//           console.log(result.text);
//           Swal.fire(
//             'Sent your Messege Successfully',
//             'You clicked the button!',
//             'success'
//           )
//           e.target.reset()
//       }, (error) => {
//           console.log(error.text);
//       });
//     }

//     return (
//        <div className='my-10'>
//         <div ><h1 className="text-center text-5xl font-serif text-gray-600 mb-5">=== Contact Us for Any doubt or Questions ===</h1></div>
//          <div className='lg:flex gap-20 justify-center items-center'>
//             <div className='lg:w-[500px] w-96 h-96 lg:h-[500px] rounded-xl lg:mt-9'>
        
//             <Image width={520}  height={500} src={contactimage} alt=''></Image>
//             </div>
//          <div className='ms-10 lg:ms-0'>
//   <form className='w-96 justify-center mt-3' ref={form} onSubmit={sendEmail}>
//       <div className='font-bold text-green-400 mt-2'><label>Name</label></div>
//       <div className=''><input className='w-72 border rounded-xl border-green-400  p-2'  type="text" name="user_name"/></div>
//       <div className='font-bold text-green-400'><label>Email</label></div>
//       <div><input className='w-72 border rounded-xl border-green-400  p-2 text-black'  type="email" name="user_email" /></div>
//       <div className='font-bold text-green-400'><label>Message</label></div>
//       <div><textarea className='w-72 h-48 border rounded-xl border-green-400  p-2'  name="message" /></div>
//       <span className='bg-green-400 p-3 text-white rounded-xl mt-3 flex items-center  w-72 justify-center'><FaTelegramPlane /> <input className='ms-2'  type="submit" value="Send" /></span>
//     </form>
//       </div>
//      </div>
//        </div>
//     );
// };

// export default Contact;


"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import contactimage from "../../../public/Gallery/contact-us-main.gif";
import Swal from "sweetalert2";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_qymata3",
				"template_l9b11q2",
				form.current,
				"27auYAxRn2wcbS3p9"
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire(
						"Sent your Message Successfully",
						"You clicked the button!",
						"success"
					);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="my-10">
			<div>
				<h1 className="text-center font-bold mt-20 pb-10 text-5xl text-gray-600 mb-5">
					Contact Us
				</h1>
			</div>
			<div className="md:flex gap-4 lg:gap-14 justify-center items-center max-w-7xl mx-auto">
				<div className="lg:w-[650px] md:w-[550px] w-[400px] h-96 lg:h-[500px] rounded-xl mx-auto lg:mt-9">
					<Image width={750} height={550} src={contactimage} alt="" />
				</div>
				<div className="lg:ms-10 md:ms-0 lg:w-[50%] md:w-[70%]">
					<div className="bg-gray-50 border-2 p-8 rounded-md shadow-md w-[90%] mx-auto">
						<form
							className="w-[100%] justify-center mt-3"
							ref={form}
							onSubmit={sendEmail}
						>
							<div className="font-bold mt-2">
								<label>Name</label>
							</div>
							<div>
								<input
									className="w-full border rounded-md border-emerald-500 p-2"
									type="text"
									name="user_name"
								/>
							</div>
							<div className="font-bold mt-3">
								<label>Email</label>
							</div>
							<div>
								<input
									className="w-full border rounded-md border-emerald-500 p-2 text-black"
									type="email"
									name="user_email"
								/>
							</div>
							<div className="font-bold mt-3">
								<label>Message</label>
							</div>
							<div>
								<textarea
									className="w-full h-48 border rounded-md border-emerald-500 p-2"
									name="message"
								/>
							</div>
							<div className="mt-3">
								<button
									type="submit"
									className="w-full bg-emerald-500 hover:bg-emerald-600 font-bold text-white rounded-md p-3 flex items-center justify-center"
								>
									<FaTelegramPlane className="mr-2 text-base" />
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
