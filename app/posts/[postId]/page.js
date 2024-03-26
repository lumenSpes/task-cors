"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/nav/nav";

const Page = (context) => {
	const postId = context.params.postId;

	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPostById = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/post/${postId}`,
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					}
				);

				console.log(response.data.post);

				if (response.status === 200) {
					setPost(response.data.post);
				} else {
					console.error("Error:", response.data);
					alert("Something went wrong.");
				}
			} catch (error) {
				console.error("Error fetching post:", error);
				alert("Something went wrong while fetching the post.");
			}
		};

		if (postId) {
			fetchPostById();
		}
	}, [postId]);

	return (
		<>
			<Nav />
		<div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
			<div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full">
				<h2 className="text-2xl font-semibold mb-4 text-gray-800">
					{post ? post.title : "No title available"}
				</h2>
				<h4 className="text-gray-600 mb-4">
					{post ? post.category : "No category available"}
				</h4>
				<p className="text-gray-700 text-base">
					{post ? post.content : "No content available"}
				</p>
			</div>
		</div>
		</>
	);
};

export default Page;
