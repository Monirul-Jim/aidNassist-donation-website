import TextModifier from "react-text-modifier";

const SingleHomeSlider = ({ slider = {} }) => {
	const { bg, title } = slider;
	return (
		<div className="relative">
			<div
				className="image-layer"
				style={{
					backgroundImage: `url(${bg})`,
				}}
			></div>
			<div className="absolute top-0 left-0 w-full h-full bg-emerald-700 opacity-50"></div>
			<div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
				<TextModifier
					text={title}
					as="h1"
					renderSeparator={() => <div className="mt-1 md:mt-4" />}
					className="font-bold font-serif text-3xl md:text-4xl lg:text-5xl"
					highlight={["AidNAssist", "Need", "Children", "Humanity"]}
					highlightClassName="text-4xl md:text-5xl lg:text-6xl text-green-300"
				/>
			</div>
		</div>
	);
};

export default SingleHomeSlider;
