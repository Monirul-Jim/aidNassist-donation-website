'use client'



import Image from 'next/image';

import four from "../../public/Gallery/404latest.gif"
import Link from "next/link";


const Notfoundpage = () => {
  
    return (
        <div>
              <div className='flex justify-center  items-center relative'>
     <Image className='w-full h-full'  src={four} alt=""/>
        </div>
        
        <span className='justify-center flex top-0 bottom-5'>
        <Link href='/' className='p-3 bg-red-500 font-extrabold text-white rounded absolute lg:top-[500px] top-52 md:top-96'>Back Home</Link>
        </span>
      
        </div>
    );
};

export default Notfoundpage;