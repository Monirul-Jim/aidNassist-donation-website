import React from "react";

const Locationbymap = () => {
	return (
		<section className="pt-16">
			<h1 className="lg:text-5xl text-3xl pb-10 font-bold text-gray-600 text-center">
				Embed Location Map
			</h1>
			<span className="flex justify-center p-5 shadow-md pb-24">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.614039102151!2d90.41933467460866!3d23.796754578638854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73b127fc1b1%3A0xe22df7b475b79f8d!2sEmbassy%20of%20the%20United%20States%20of%20America!5e0!3m2!1sen!2sbd!4v1692265997158!5m2!1sen!2sbd"
					width="100%"
					height="450"
					style={{
						border: "0",
						boxShadow: "0px 8px 8px 5px rgba(0, 0, 0, 0.1)",
					}}
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</span>
		</section>
	);
};

export default Locationbymap;