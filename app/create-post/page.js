"use client";
import Nav from "@/components/nav/nav";
import React, { useState } from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
    });
    const [selectedOption, setSelectedOption] = useState("Action");

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${formData.title}, Category: ${formData.category}, Description: ${formData.description}`);
    };

    return (
        <>
        <Nav></Nav>
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
                                Select an option:
                                <select
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm"
                                >
                                    <option value="option1">Sci Fi</option>
                                    <option value="option2">Action</option>
                                    <option value="option3">Slice Of Life</option>
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
