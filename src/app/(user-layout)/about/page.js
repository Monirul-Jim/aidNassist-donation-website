import Image from 'next/image';
import React from 'react';
import Overlay from '../../../../public/overlay.png'
import AboutImage from '../../../../public/Gallery/gallery-3.jpg'

const About = () => {
    return (
        <div className='p-2 md:p-0'>
        {/* banner section start */}
            <div className='banner_section relative bg-blue-300'>
                <div className='container mx-auto text-center py-40 '>
                    <h1 className='text-black text-3xl md:text-5xl font-semibold'>A Few Words About <br/> <span className='text-green-400'>Aid & Assist</span></h1>
                    <p className='text-white mt-4 w-full lg:w-3/4 mx-auto'>Welcome to Aid & Assist! Unite with us in making a difference. Your online donations empower impactful change, touching lives and fostering hope worldwide. Together, we transform compassion into action. Thank you for being part of our mission.</p>
                </div>
                <div className='style_image'>
                    <Image className='absolute top-0 right-0 rotate-180 w-1/3 md:w-[170px] lg:w-[300px]' width="300" height="300" src={Overlay} alt='overlay image'/>
                </div>
                <div className='style_image'>
                    <Image className='absolute bottom-0 left-0 w-1/3 md:w-[170px] lg:w-[300px]' width="300" height="300" src={Overlay} alt='overlay image'/>
                </div>
            </div>
            {/* banner section end */}

        {/* our about text section start */}
            <div className='my-16'>
                <div className='container mx-auto '>
                    <div className='md:flex gap-10 items-center border-b-2 pb-14'>
                        <div className='w-full md:w-1/2'>
                            <Image width="400" height="400" className='w-full rounded-lg' src={AboutImage} alt='image' />
                        </div>
                        <div className='w-full md:w-1/2 pl-0 md:pl-6 mt-10 md:mt-0'>
                            <h1 className='text-black text-2xl md:text-3xl lg:text-5xl  font-semibold uppercase'>At Holity, we manage global charitable projects</h1>
                            <p className='text-slate-600 mt-4 w-full lg:w-3/4'>Vivamus rhoncus odio ut ultrices efficitur. Suspendisse potenti. Donec congue aliquam elit, non fringilla enim.Duis aute irure dolor. Vivamus rhoncus odio ut ultrices efficitur. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our about text section end */}
            {/* our mission vision and goal section start  */}
            <div className='my-16 '>
                <div className='container mx-auto '>
                    <div className='md:flex gap-10 justify-between'>
                        <div className=''>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Vision</h1>
                            <p className='text-slate-600 mt-4'>Our vision at Aid & Assist is a world transformed by empathy. We envision equal opportunities for all, fueled by online donations that bridge gaps and empower communities.</p>
                            <p className='text-slate-600 mt-4'>Together, were weaving a future where compassion drives lasting change. Join us in turning this vision into a reality.</p>
                        </div>
                        <div className='mt-10 md:mt-0'>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Mission</h1>
                            <p className='text-slate-600 mt-4'>Our mission at Aid & Assist is to harness the potential of online donations, directing them towards impactful projects that uplift underserved communities, provide essential aid during crises, and create sustainable change. </p>
                            <p className='text-slate-600 mt-4'> We are dedicated to making giving accessible, transparent, and effective, fostering a global network of positive transformation.</p>
                        </div>
                        <div className='mt-10 md:mt-0'>
                            <h1 className='text-slate-900 text-2xl md:text-3xl font-semibold '>Our Goal</h1>
                            <p className='text-slate-600 mt-4'>Our goal at Aid & Assist is to inspire and facilitate meaningful giving through online donations. We aim to raise awareness, mobilize resources, and drive positive change in various domains such as education, healthcare, disaster relief, and community development. </p>
                            <p className='text-slate-600 mt-4'>Together, we strive to create a more equitable and compassionate world.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our mission vision and goal section end  */}
        </div>
    );
};

export default About;