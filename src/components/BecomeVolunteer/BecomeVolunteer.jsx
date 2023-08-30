import Link from 'next/link';
import './BecomeVolunteer.css'

// const BecomeVolunteer = () => {
//     return (
//         <div className='volunteerBackground bg-fixed font-serif my-20'>
//             <div className='lg:pt-20 lg:pb-20 lg:px-14 pt-5 pb-2 '>
//                 <h2 className='text-center lg:text-5xl text-green-300'>Are You Ready to Volunteer?</h2>
//                 <p className='text-center lg:text-2xl mt-5 text-emerald-500'>start one of our programme today and help people in need</p>
//                 <hr className="border-t-4 border-green-300 rounded-2xl mt-4 w-1/12 mx-auto" />
//             <div className='flex justify-center mt-8 pb-5'>
//                 <Link href="volunteers">
//                 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
//                     <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                         Become a Volunteer
//                     </span>
//                 </button>
//                 </Link>
//             </div>
//             </div>
//         </div>
//     );
// };
const BecomeVolunteer = () => {
    return (
        <div className="volunteerBackground bg-fixed my-20 relative mx-auto">
            <div className="absolute inset-0 bg-emerald-600 opacity-40"></div>
            <div>
                <div className="lg:pt-14 lg:pb-5 lg:px-14 pb-2 mt-8 relative z-10">
                    <h2 className="text-center text-[26px] lg:text-4xl font-bold text-white leading-6">
                        Ready to Change Lives?
                        <p className="mt-3">Become a Volunteer With Us!</p>
                    </h2>
                    <p className="text-center lg:text-xl mt-6 text-white">
                        Start one of our programme today and help people in need
                    </p>
                    <hr className="border-t-4 border-emerald-300 rounded-2xl mt-4 w-1/12 mx-auto" />
                </div>
                <div className="flex justify-center pb-5 relative z-10">
                    <Link href="volunteers">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-emerald-500 to-emerald-800 group-hover:from-emerald-400 group-hover:to-emerald-400 hover:text-white dark:text-white focus:ring-4">
                            <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
                                Become a Volunteer
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BecomeVolunteer;