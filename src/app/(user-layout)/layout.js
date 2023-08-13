import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";

const UserLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default UserLayout;
