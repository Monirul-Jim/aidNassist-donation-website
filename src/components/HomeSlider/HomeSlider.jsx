"use client";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import mainSlider from "@/data/mainSlider";
import SingleHomeSlider from "./SingleHomeSlider";
import "swiper/css/bundle";

const HomeSlider = () => {
	return (
		<section className="main-slider">
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
