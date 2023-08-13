'use client'

import Link from "next/link";
import four from './../fourzerofour.json'
import Lottie from "react-lottie";

const Notfoundpage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: four,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
              <div className='w-fit mx-auto lg:h-96'>
      <Lottie options={defaultOptions}
              />
        </div>
        <div className='flex justify-center'>
        <Link href='/' className='p-3 bg-slate-400 text-white rounded'>Back Home</Link>
        </div>
        </div>
    );
};

export default Notfoundpage;