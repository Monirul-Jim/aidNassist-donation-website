"use client";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mainSlider from "@/data/mainSlider";
import SingleHomeSlider from "./SingleHomeSlider";
import "swiper/css/bundle";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomeSlider = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<section className="main-slider" data-aos="fade-up"
			data-aos-anchor-placement="top-bottom">
			<Swiper
				slidesPerView={1}
				loop
				navigation
				effect="fade"
				autoplay
				modules={[Navigation, EffectFade, Autoplay]}
			>
				{mainSlider.map((slider) => (
					<SwiperSlide key={slider.id}>
						<SingleHomeSlider slider={slider} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default HomeSlider;
