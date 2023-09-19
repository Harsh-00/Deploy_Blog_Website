import React from "react";
import Title from "../comp/Title";
import Main from "../comp/Main";
import Bottom from "../comp/Bottom";

const Home = () => {
	return (
		<div className="relative w-full h-full min-h-screen flex flex-col items-center mt-20">
			<Title></Title>
			<Main></Main>
			<Bottom></Bottom>
		</div>
	);
};

export default Home;
