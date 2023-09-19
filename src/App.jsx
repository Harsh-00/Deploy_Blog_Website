import React, { useContext } from "react";
import { AppContextH } from "./context/AppContext";
import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagsPage from "./Pages/TagsPage";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
	// first lets do api call which is present in context file
	const { APIcall } = useContext(AppContextH);

	//using 2 hooks to get exact tag,category ,page from url itself

	// SearchParams --> use to store those parameters that comes with ? in url like "page" here
	const [srchPara, setSrchPara] = useSearchParams();

	// store loaction or url on which we are present
	const loc = useLocation();

	//will rendere at beginning also
	useEffect(() => {
		//if page key exist in url, then store it's value else store 1 as value in variable named pg
		const pg = srchPara.get("page") ?? 1;

		// either tags exist in url or category exist or None but NEVER both

		if (loc.pathname.includes("tags")) {
			//matlab url me tags hai to iska matlab tags wala page show krna hai

			//ab hume chaiye konsa tag hai jiska page show krna hai for that we first split url by "/" then, select the last element of this split bcz last element will be our tag
			const tag = loc.pathname.split("/").at(-1).replaceAll("-", " ");
			//Machine-learning ---> Machine Learning

			APIcall(Number(pg), tag);

			// ---
		} else if (loc.pathname.includes("categories")) {
			const cat = loc.pathname.split("/").at(-1).replaceAll("-", " ");
			APIcall(Number(pg), null, cat);

			// ---
		} else {
			// neither tag nor cat exist in url

			APIcall(Number(pg));
		}
	}, [loc.pathname, loc.search]);
	// here due to loc.search in above Array,our APIcall gets executed whenever we click on next or previous (means changing page) bcz search parameter in url changes

	// now our components
	return (
		<Routes>
			<Route index element={<Home />}></Route>
			<Route path="/blog/:blogID" element={<BlogPage></BlogPage>}></Route>
			<Route path="/tags/:tag" element={<TagsPage></TagsPage>}></Route>
			<Route
				path="/categories/:cat"
				element={<CategoryPage></CategoryPage>}
			></Route>
		</Routes>
	);
};

export default App;

// Props Drilling :passing data from parent to down deeply-nested children.
// if we do it simply by passing props then we will keep passing props to each children(which is not efficient)
// So for that reason ,we will use CONTEXT API concept to pass data to any children ,doesnt matter how deep it is nested
// NOTE:use it only when required (when children is deeply nested)

// ------------------------------
// 1.Create Context file
// 2.Providing the Context file (to be used)
// 3.Using the content of the file

// if context api is used on any component then that component and ALL its children will be able to access context file
