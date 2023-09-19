import FacebookMessage from "@/components/FacebookMessage/FacebookMessage";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Notify from "@/components/Notify/Notify";
import WhatsappAPK from "@/components/whatsapp/Whatsapp";

import Providers from "@/providers";
import { Toaster } from "react-hot-toast";

const UserLayout = ({ children }) => {
	return (
		<div>
			<Providers>
				<Navbar />
				<WhatsappAPK></WhatsappAPK>
				<FacebookMessage/>
				<Notify></Notify>
				{children}
				<Footer />
			</Providers>
			<Toaster />
		</div>
	);
};

export default UserLayout;