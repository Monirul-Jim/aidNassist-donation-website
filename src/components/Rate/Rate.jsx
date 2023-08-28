"use client";
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = ({ count, rating, color, onRating }) => {
	const [hoverRating, setHoverRating] = useState(0);

	const getColor = (index) => {
		if (hoverRating >= index) {
			return color.filled;
		} else if (!hoverRating && rating >= index) {
			return color.filled;
		}

		return color.unfilled;
	};

	const starRating = useMemo(() => {
		return Array(count)
			.fill(0)
			.map((_, i) => i + 1)
			.map((idx) => (
				<FaStar
					key={idx}
					className="cursor-pointer"
					onClick={() => onRating(idx)}
					style={{ color: getColor(idx) }}
					onMouseEnter={() => setHoverRating(idx)}
					onMouseLeave={() => setHoverRating(0)}
				/>
			));
	}, [count, rating, hoverRating]);

	return <div className="flex items-center gap-2 text-3xl">{starRating}</div>;
};

Rate.propTypes = {
	count: PropTypes.number,
	rating: PropTypes.number,
	onChange: PropTypes.func,
	color: {
		filled: PropTypes.string,
		unfilled: PropTypes.string,
	},
};

Rate.defaultProps = {
	count: 5,
	rating: 0,
	color: {
		filled: "#f5eb3b",
		unfilled: "#DCDCDC",
	},
};

export default Rate;
