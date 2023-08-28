"use client";
import "./Gallery.css";
import ImageOne from "../../../public/Gallery/gallery-1.jpg";
import ImageTwo from "../../../public/Gallery/gallery-2.jpg";
import ImageThree from "../../../public/Gallery/gallery-3.jpg";
import ImageFour from "../../../public/Gallery/gallery-4.jpg";
import ImageFive from "../../../public/Gallery/gallery-5.jpg";
import ImageSix from "../../../public/Gallery/gallery-6.jpg";
import ImageSeven from "../../../public/Gallery/gallery-7.jpg";
import ImageEight from "../../../public/Gallery/gallery-8.jpg";
import Image from "next/image";

const Gallery = () => {
	return (
		<>
			<section>
				<div className="container mx-auto mt-20">
					<h2 className="text-center pt-20 pb-6 text-5xl lg:max-w-4xl font-bold mx-auto">
						Our <span className="text-blue-800">Gallery</span>
					</h2>
					<p className="text-center lg:max-w-2xl mx-auto text-xl mb-16">
						Enhance the functionality and design of the gallery
						based on your specific requirements and design
						preferences.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
						<Image
							width={450}
							height={300}
							src={ImageOne}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>

						<Image
							width={450}
							height={300}
							src={ImageFour}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>
						<Image
							width={450}
							height={300}
							src={ImageFive}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>
						<Image
							width={450}
							height={300}
							src={ImageSix}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>
						<Image
							width={450}
							height={300}
							src={ImageSeven}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>
						<Image
							width={450}
							height={300}
							src={ImageEight}
							alt="gallery-image"
							className="hover:-translate-y-2 hover:-translate-x-2 border-8 border-transparent hover:border-r-emerald-600 hover:border-b-emerald-600 duration-300"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
