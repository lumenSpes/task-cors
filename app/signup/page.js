"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Define the page component
const page = () => {
	// Initialize useRouter hook
	// const router = useRouter();

	// Initialize state for form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	// Handle form input change
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	// Handle form submission
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/registration",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			// Handle successful response
			console.log("Response:", response.data);
			if (response.status === 200) {
				// Redirect to login page
				window.location.href = "/login";
			}
		} catch (error) {
			// Handle errors
			console.error("Error:", error);
		}
	};

	return (
		<>
			<section className="min-h-screen flex flex-col justify-center items-center">
				<div className="bg-[#F8F6E3]">
					<form
						onSubmit={handleSubmit}
						className="max-w-sm mx-auto  shadow-md rounded px-8 pt-6 pb-8"
					>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Enter your name"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block text-gray-700 text-sm font-bold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Enter your password"
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
			;
		</>
	);
};

export default page;
