'use client'
import './testimonial.css'
import Image from 'next/image';
import frist from '../../../public/Gallery/testing.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Testimonial = () => {
    useEffect(() => {
        Aos.init({ duration: 2700 });
    }, []);
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h1 className='text-5xl font-serif text-gray-600 text-center my-3'>Testimonial</h1>
            <div className='bannersetup bg-fixed font-serif  h-fit w-full py-3'>
                <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1'>
                    {/* 1st */}
                    <div className='pt-2 lg:pt-0'>
                        <div className="triangle absolute inset-0 opacity-40 z-10"><h1 className='relative z-20 text-black font-extrabold'>The donation options are diverse, and I
                            appreciate the transparency in showing how the
                            funds are used</h1></div>
                        <div className='flex justify-center items-center '>
                            <Image className='w-14 h-14 rounded-full border-4 border-green-400' src={frist} alt='image' />
                        </div>
                    </div>
                    {/* 1st end */}
                    {/* 2nd */}
                    <div>
                        <div className="triangle absolute inset-0 opacity-40 z-10"><h1 className='relative z-20 text-black font-extrabold'>The donation options are diverse, and I
                            appreciate the transparency in showing how the
                            funds are used</h1></div>
                        <div className='flex justify-center items-center '>
                            <Image className='w-14 h-14 rounded-full border-4 border-green-400' src={frist} alt='image' />
                        </div>
                    </div>
                    {/* 2nd end */}
                    {/* 3rd */}
                    <div>
                        <div className="triangle absolute inset-0 opacity-40 z-10"><h1 className='relative z-20 text-black font-extrabold'>The donation options are diverse, and I
                            appreciate the transparency in showing how the
                            funds are used</h1></div>
                        <div className='flex justify-center items-center '>
                            <Image className='w-14 h-14 rounded-full border-4 border-green-400' src={frist} alt='image' />
                        </div>
                    </div>
                    {/* 3rd end */}
                    {/* 4th */}
                    <div>
                        <div className="triangle absolute inset-0 opacity-40 z-10"><h1 className='relative z-20 text-black font-extrabold'>The donation options are diverse, and I
                            appreciate the transparency in showing how the
                            funds are used</h1></div>
                        <div className='flex justify-center items-center '>
                            <Image className='w-14 h-14 rounded-full border-4 border-green-400' src={frist} alt='image' />
                        </div>
                    </div>
                    {/* 4th end */}
                </div>
                {/* after two cols */}

                {/* 5th */}
                <div className='lg:flex lg:justify-center pb-3 lg:pb-0'>
                    <div>
                        <div className="triangle absolute inset-0 opacity-40 z-10"><h1 className='relative z-20 text-black font-extrabold'>The donation options are diverse, and I
                            appreciate the transparency in showing how the
                            funds are used</h1></div>
                        <div className='flex justify-center items-center '>
                            <Image className='w-14 h-14 rounded-full border-4 border-green-400' src={frist} alt='image' />
                        </div>
                    </div>
                </div>
                {/* 5th end */}

            </div>
        </div>
    );
};

export default Testimonial;