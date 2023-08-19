"use client"
import "./Gallery.css"
import ImageOne from '../../../public/Gallery/gallery-1.jpg'
import ImageTwo from '../../../public/Gallery/gallery-2.jpg'
import ImageThree from '../../../public/Gallery/gallery-3.jpg'
import ImageFour from '../../../public/Gallery/gallery-4.jpg'
import ImageFive from '../../../public/Gallery/gallery-5.jpg'
import ImageSix from '../../../public/Gallery/gallery-6.jpg'
import ImageSeven from '../../../public/Gallery/gallery-7.jpg'
import ImageEight from '../../../public/Gallery/gallery-8.jpg'
import Image from "next/image"

const Gallery = () => {

    return (
        <>
            <section className="bg-rose-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <Image width="500" height={300} src={ImageOne} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageTwo} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageThree} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageFour} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageFive} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageSix} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageSeven} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                        <Image width="500" height={300} src={ImageEight} className="w-full hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-rose-500 hover:border-b-rose-500 duration-300" alt="Nothing"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;