import React, { useContext } from "react";
import { AppContextH } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Main = () => {
	// using data from context file
	const { post, load } = useContext(AppContextH);
	console.log(post);

	return (
		<div className=" w-11/12 max-w-[680px] mb-24  min-h-screen ">
			{load ? (
				<Spinner></Spinner>
			) : post.length === 0 ? (
				<h2>No Data Found</h2>
			) : (
				post.map((ele) => (
					<div key={ele.id}>
						<Card postt={ele} />
					</div>
				))
			)}
		</div>
	);
};

export default Main;
