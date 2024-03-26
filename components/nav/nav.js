import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="flex justify-between items-center p-10 gap-10">
			<Link href="/">Home</Link>
			<ul className="flex justify-between items-center gap-10">
				<li>
					<Link href="/create-post">Create Post</Link>
				</li>
				<li>
					<Link href="/posts">All Posts</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
