import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const useAxios = () => {
	const { logOut } = useAuth();
	const router = useRouter();
	// const navigate = useNavigate();
	const axiosSecure = axios.create({
		baseURL: "http://localhost:3000",
	});

	useEffect(() => {
		axiosSecure.interceptors.request.use((config) => {
			const token = localStorage.getItem("access-token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 403)
				) {
					await logOut();
					navigate("/login");
				}
				return Promise.reject(error);
			}
		);
	}, [logOut, router, axiosSecure]);
	return [axiosSecure];
};

export default useAxios;
