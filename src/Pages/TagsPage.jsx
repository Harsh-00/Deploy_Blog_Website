import React from "react";
import Title from "../comp/Title";
import Bottom from "../comp/Bottom";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../comp/Main";

const TagsPage = () => {
	const nav = useNavigate();
	const loc = useLocation();
	const tag = loc.pathname.split("/").at(-1).replace("-", " ");
	return (
		<div className="relative w-full h-full min-h-screen flex flex-col items-center">
			<Title />
			<div className="flex gap-6 mt-24 w-11/12 max-w-[680px]">
				<button
					className="border-2 rounded-lg px-4 py-1 shadow-md"
					onClick={() => nav(-1)}
				>
					Back
				</button>

				<h2 className="font-bold text-2xl">
					Blogs Tagged <span className="text-blue-500">#{tag}</span>
				</h2>
			</div>
			<Main />

			<Bottom />
		</div>
	);
};

export default TagsPage;
