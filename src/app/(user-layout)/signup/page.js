import LoginSvg from "@/components/LoginSvg";
import SignupForm from "./SignUpForm";

export const metadata = {
	title: "Signup - aidNassist",
};

const Signup = () => {
	return (
		<div className="hero mt-32 mb-10">
			<div className="hero-content flex flex-col lg:flex-row justify-center">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold text-center">
						Register now!
					</h1>
					<p className="pt-6 text-center">
						Register now to connect with us.
					</p>
					<LoginSvg />
				</div>
				<div className="flex-shrink-0 w-full max-w-lg">
					<SignupForm />
				</div>
			</div>
		</div>
	);
};

export default Signup;
