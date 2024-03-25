"use client";
import React from "react";
import "./root.css";
import { clsx } from "clsx";
import Link from "next/link";

const Root = () => {
	return (
		<section
			className="min-h-screen w-full h-full"
			id="bg-img"
		>
			{/* <h1 class="text-[40px] font-[700] text-transparent bg-gradient-to-r from-orange-600 to-white-600 bg-clip-text text-center items-center">
				Create amazing blogposts.
			</h1> */}
			<div className=" flex flex-col justify-center items-center relative top-60">
				<h1 className=" text-transparent bg-gradient-to-r from-[#7AA2E3] to-[#97E7E1] bg-clip-text text-center font-[700] text-[55px] ">
					Get latest research blogs daily.
				</h1>
				<div className="flex justify-center items-center gap-5">
					<Link
						href="/signup"
						className="bg-gradient-to-r from-[#7AA2E3] to-[#97E7E1] px-[12px] py-[8px] text-white rounded-full font-[600]"
					>
						Sign Up
					</Link>
					<Link
						href="/login"
						className="bg-gradient-to-r from-[#97E7E1] to-[#7AA2E3] px-[12px] py-[8px] text-white rounded-full font-[600]"
					>
						Log In 
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Root;
