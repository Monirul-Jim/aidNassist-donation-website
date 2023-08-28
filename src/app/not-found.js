'use client'



import Image from 'next/image';
import fourzero from '../../public/Gallery/404-page.webp'
import Link from "next/link";


const Notfoundpage = () => {
  
    return (
        <div>
              <div className='flex justify-center items-center relative'>
     <Image  src={fourzero} alt=""/>
        </div>
        <div className='flex justify-center absolute lg:top-80 lg:ms-[540px] ms-28 top-[270px]'>
        <Link href='/' className='p-3 bg-red-500 font-extrabold text-white rounded'>Back Home</Link>
        </div>
        </div>
    );
};

export default Notfoundpage;