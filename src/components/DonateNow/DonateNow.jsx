import Image from "next/image";
import Link from "next/link";
import img from "../../../public/Gallery/gallery-7.jpg"


const DonateNow = () => {
    return (
        <div className="mt-40 mb-10">
            <div className="flex justify-center items-center gap-32">
                <div>
                    <h2 className="text-4xl">They Need Your Help</h2>
                    <p className="max-w-sm my-7">We collect your contribution to their aid. From Raised money, We Provide them, Food, Education etc.</p>
                    <Link href={'payment'}><button className="rounded-lg bg-green-300 px-6 py-3">Donate Now</button></Link>
                </div>

                {/* Image Section */}
                <div className="hidden md:block">
                <Image className="rounded-xl w-[630px] relative" width={630} height={630} src="https://i.postimg.cc/133MKBYL/abstract-blur-empty-green-gradient-studio-well-use-as-backgroundwebsite-templateframebusiness-report.jpg" alt="no image" />
                <Image className="w-[620px] rounded-xl absolute transform -translate-y-[465px] -translate-x-10" width={630} height={630} src={img} alt="no image" />
                </div>
            </div>
        </div>
    );
};

export default DonateNow;