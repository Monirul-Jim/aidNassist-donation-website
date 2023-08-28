import useAuth from "@/hooks/useAuth";
import createJWT from "@/util/createJWT";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
	const { googleLogin } = useAuth();
	const { replace, refresh } = useRouter();

	const handleGoogleLogin = async () => {
		const toastId = toast.loading("Loading...");
		try {
			const { user } = await googleLogin();
			await createJWT({ email: user.email });
			startTransition(() => {
				refresh();
				replace(from);
				toast.dismiss(toastId);
				toast.success("User signed in successfully");
			});
		} catch (error) {
			toast.dismiss(toastId);
			toast.error(error.message || "User not signed in");
		}
	};

	return (
		<button
			onClick={handleGoogleLogin}
			type="button"
			className="btn btn-secondary mx-auto text-center w-full"
		>
			<span className="flex items-center justify-center">
				<FcGoogle className="text-3xl mr-3" />
				Continue with Google
			</span>
		</button>
	);
};

export default GoogleLogin;
