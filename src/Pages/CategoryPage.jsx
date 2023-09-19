import React from "react";
import Title from "../comp/Title";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../comp/Main";
import Bottom from "../comp/Bottom";

const CategoryPage = () => {
	const nav = useNavigate();
	const loc = useLocation();
	const cat = loc.pathname.split("/").at(-1);
	return (
		<div>
			<Title />
			<div className="relative w-11/12 max-w-[680px] mb-24  min-h-screen mx-auto">
				<div className=" mt-28 flex gap-6">
					<button
						className="border-2 rounded-lg px-4 py-1 shadow-md"
						onClick={() => nav(-1)}
					>
						Back
					</button>
					<h2 className="font-bold text-2xl">
						Blogs on <span>{cat}</span>
					</h2>
				</div>
				<div className="">
					<Main />
				</div>
			</div>
			<Bottom />
		</div>
	);
};

export default CategoryPage;
