"use client";

import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/util/createJWT";
import { useSearchParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Link from "next/link";
import "./loginform.css";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { signIn } = useAuth();
	const search = useSearchParams();
	const from = search.get("redirectUrl") || "/";
	const { replace, refresh } = useRouter();

	const [showPassword, setShowPassword] = useState(false);
	const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

	const onSubmit = async (data) => {
		const { email, password } = data;
		const toastId = toast.loading("Loading...");
		try {
			await signIn(email, password);
			await createJWT({ email });
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
		<form onSubmit={handleSubmit(onSubmit)} className="card-body">
			<div className="form-control">
				<label htmlFor="email" className="label label-text">
					Email
				</label>
				<input
					type="email"
					placeholder="email"
					id="email"
					name="email"
					className="input input-bordered text-black"
					autoComplete="email"
					{...register("email", {
						required: true,
						pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
					})}
				/>
				{errors.email && (
					<span className="text-red-500 text-base mt-1">
						Please enter a valid email address.
					</span>
				)}
			</div>
			<div className="form-control">
				<label htmlFor="password" className="label label-text">
					Password
				</label>
				<input
					type={showPassword ? "text" : "password"}
					placeholder="password"
					id="password"
					name="password"
					className="input input-bordered text-black"
					autoComplete="new-password"
					{...register("password", { required: true, minLength: 6 })}
				/>
				{errors.password && (
					<span className="text-red-500 text-base mt-1">
						Please enter a password.
					</span>
				)}
				<label className="label">
					<a href="#" className="label-text-alt link link-hover">
						Forgot Password?
					</a>
				</label>
			</div>

			<div className="form-control">
					<label className="label cursor-pointer">
						<span className="label-text mr-72">Show Password</span>
						<input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox checkbox-primary" />
					</label>
				</div>








			<div className="form-control mt-6">
				<button className="btn btn-[#059669]" type="submit">
					Login
				</button>
			</div>
			<p className="mt-3">
				Don&apos;t have an account?
				<Link className="text-emerald-600 font-bold ml-1" href="/signup">
					Signup
				</Link>
			</p>
			<div className="divider mt-5">OR</div>
			<GoogleLogin className="justify-center mx-auto w-full items-center" from={from} />
		</form>
	);
};

export default LoginForm;
