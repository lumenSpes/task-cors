"use client";
import Nav from "@/components/nav/nav";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/post", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});

				console.log(response.data["Posts: "]);

				if (response.status === 200) {
					setPosts(response.data["Posts: "]);
				} else {
					console.error("Error:", response.data);
					alert("Something went wrong.");
				}
			} catch (error) {
				console.error("Error fetching posts:", error);
				alert("Something went wrong while fetching posts.");
			}
		};

		fetchPosts();
	}, []);

	return (
		<>
			<section className="bg-gray-100 min-h-screen flex flex-col items-center">
				<Nav />
				<div className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{posts.map((post) => (
							<div
								key={post.id}
								className="bg-white rounded-lg shadow-md p-6"
							>
								<Link
									href={`/posts/${post.id}`}
									className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition duration-300"
								>
									{post.title}
								</Link>
								<h4 className="text-gray-600 my-2">{post.category}</h4>
								<p className="text-gray-700">{post.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
