import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//creating context
export const AppContextH = createContext();

//Creating Provider

// Here , children is predefined parameter which means content(component or tag or text everything) present in AppConProvider tag, wherever used
// (checkout index.js file, App tag from index.js is children )

export default function AppConProvider({ children }) {
	const [load, setLoad] = useState(false);
	const [page, setPage] = useState(1);
	const [post, setPost] = useState([]);
	const [maxpage, setMaxpage] = useState();
	const nav = useNavigate();

	//Data filling up
	async function APIcall(pg, tg = null, cat = null) {
		setLoad(true);
		let url = `${baseUrl}?page=${pg}`;
		if (tg) {
			url += `&tag=${tg}`;
		} else if (cat) {
			url += `&category=${cat}`;
		}

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);

			setMaxpage(data.totalPages);
			setPage(data.page);
			setPost(data.posts);
			setLoad(false);
		} catch (e) {
			alert("API call Failed");
		}
	}

	// storing all values in an object(now,we will use this variable to access values)
	const val = {
		load,
		setLoad,
		page,
		setPage,
		post,
		setPost,
		maxpage,
		setMaxpage,
		APIcall,
		PageChanger,
	};

	function PageChanger(pg) {
		setPage(pg);
		nav({ search: `?page=${pg}` });
		console.log(page);
		
		// APIcall(pg);
		//now no need
	}

	// this is SYNTAX of return (tag --> name used while creating context + .Provider)
	return <AppContextH.Provider value={val}>{children}</AppContextH.Provider>;
	// giving access of val variable to the children(which is <App> component)
}
