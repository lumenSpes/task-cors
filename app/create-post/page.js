"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/nav/nav";

const Page = () => {
	const [formData, setFormData] = useState({
		title: "",
		category: "",
		description: "",
	});

	const [selectedOption, setSelectedOption] = useState("Sci Fi");

	useEffect(() => {
		setFormData((prevFormData) => ({
			...prevFormData,
			category: selectedOption,
		}));
	}, [selectedOption]);

	const handleDropdownChange = (event) => {
		const { value } = event.target;
		setSelectedOption(value);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "title" || name === "description") {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log(formData);

		try {
			const response = await axios.post(
				"http://127.0.0.1:8000/api/create-post",
				JSON.stringify(formData),
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);

			if (response.status === 200) {
				console.log(response.data);
				window.location.href = "/posts";
			} else {
				console.error("Error:", response.data);
				alert("Something went wrong.");
			}
		} catch (error) {
			console.error("Error:", error.message);
			alert("Validation Failed", error.message);
		}
	};

	return (
		<>
			<Nav />
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-4">Create a post</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="title"
								className="block text-sm font-medium text-gray-700"
							>
								Title:
							</label>
							<input
								type="text"
								id="title"
								name="title"
								value={formData.title}
								onChange={handleChange}
								className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm"
							/>
						</div>

						<div className="mb-4">
							<label>
								Select a category:
								<select
									id="category"
									name="category"
									value={selectedOption}
									onChange={handleDropdownChange}
									className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm"
								>
									<option value="Sci Fi">Sci Fi</option>
									<option value="Action">Action</option>
									<option value="Slice Of Life">Slice Of Life</option>
								</select>
							</label>
						</div>

						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700"
							>
								Description:
							</label>
							<textarea
								id="description"
								name="description"
								value={formData.description}
								onChange={handleChange}
								className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm"
								rows="4"
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Page;
