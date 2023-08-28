import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";

const AllCauses = async () => {
	let data = await fetch("http://localhost:3000/api/causes");
	data = await data.json();
	if (data.success) {
		return data.result;
	} else {
		return { success: false };
	}
	return (
		<div>
			<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat ipsam atque, illo reiciendis commodi quae adipisci eaque possimus quaerat id quas vitae facilis nulla vero, doloremque temporibus eius. Officia corporis omnis corrupti magnam laboriosam. Numquam rem ipsam cumque expedita sint quidem eveniet veniam placeat necessitatibus corporis repellat inventore molestiae perspiciatis, magnam quasi cum eligendi nisi! Voluptatem ea necessitatibus temporibus neque ut vitae totam, quia ab inventore quibusdam voluptatibus, minima dolorem sint, esse consectetur dignissimos enim id earum eos? Id quisquam impedit eveniet deleniti perferendis! Pariatur asperiores, sed ab autem beatae reprehenderit blanditiis qui a excepturi inventore nostrum unde ea!
            </h1>
		</div>
	);
};

export default AllCauses;
