import FacebookMessage from "@/components/FacebookMessage/FacebookMessage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Navbar />
				<FacebookMessage/>
				{children}
				<Footer />
			</Providers>
			<Toaster />
		</div>
	);
};

export default UserLayout;