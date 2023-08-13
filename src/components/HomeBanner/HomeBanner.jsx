import Image from "next/image";
import BannerImage from "../../../public/Banner.jpeg"

const HomeBanner = () => {
    return (
        <div className=" w-full">
            <div className="flex flex-col  md:flex-row gap-4 md:gap-10 justify-center my-6 md:my-12 items-center bg-green-300 py-5 md:py-10 rounded">
                <div className="max-w-lg">
                    <h1 className="font-bold text-2xl md:text-4xl">Lets Help Those Who Are More In Need</h1>
                    <p className="text-slate-500 mt-3 md:mt-5">As soon as you complete your donation, your gift will start its journey. First your money will be turned into food, and then sent to one of the over 120 countries where people are most vulnerable. Every single day, WFP has 5,600 trucks, 30 ships and nearly 100 planes.</p>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-3 md:px-5 py-2 mb-2 md:mb-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3 md:mt-5">Donate Now</button>
                </div>
                <div className="md:ml-6">
                    <Image width={500} height={400} src={BannerImage} alt="No Image" />
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;