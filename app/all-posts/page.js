import Nav from "@/components/nav/nav";
import React from "react";

const Page = () => {
	return (
		<>
			<section>
				<Nav />
				<div className="min-h-screen bg-gray-100 flex justify-center items-center">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Card 1 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-semibold mb-2">Title</h2>
							<h4 className="text-gray-600 mb-4">Category</h4>
							<p className="text-gray-700 text-sm overflow-hidden line-clamp-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus pretium risus non neque aliquet, eget ultrices leo
								dignissim. Maecenas nec tempus mauris. Nulla facilisi. Nulla
								facilisi.
							</p>
						</div>

						{/* Card 2 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-semibold mb-2">Title</h2>
							<h4 className="text-gray-600 mb-4">Category</h4>
							<p className="text-gray-700 text-sm overflow-hidden line-clamp-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus pretium risus non neque aliquet, eget ultrices leo
								dignissim. Maecenas nec tempus mauris. Nulla facilisi. Nulla
								facilisi.
							</p>
						</div>

						{/* Card 3 */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-semibold mb-2">Title</h2>
							<h4 className="text-gray-600 mb-4">Category</h4>
							<p className="text-gray-700 text-sm overflow-hidden line-clamp-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus pretium risus non neque aliquet, eget ultrices leo
								dignissim. Maecenas nec tempus mauris. Nulla facilisi. Nulla
								facilisi.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
