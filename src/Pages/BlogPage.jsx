import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContextH } from "../context/AppContext";
import Title from "../comp/Title";
import Spinner from "../comp/Spinner";
import Card from "../comp/Card";

const BlogPage = () => {
	const loc = useLocation();
	const nav = useNavigate();

	const { setLoad, load } = useContext(AppContextH);

	// fetching blogid from the App.jsx where we passed it as :blogID (dynamic)

	// const { blogID } = useParams();
	// const blogidd = blogID;

	// const blogidd = blogID;

	// OR
	const blogidd = loc.pathname.split("/").at(-1);

	const [blog, setBlog] = useState(null);
	const [relBlog, setRelBlog] = useState([]);
	console.log(relBlog);
	console.log(blog);

	async function RelatedBlogsCall() {
		setLoad(true);
		let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogidd}`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			setBlog(data.blog);
			setRelBlog(data.relatedBlogs);
			setLoad(false);
		} catch (e) {
			alert("API call Failed");
		}
	}
	useEffect(() => {
		if (blogidd) RelatedBlogsCall();
	}, [loc.pathname]);
	console.log("DONE");
	return (
		<div className="w-full">
			<Title />
			<div className="relative w-11/12 max-w-[680px] mb-24 mt-24 pt-8 flex flex-col min-h-screen items-center mx-auto">
				<div className="absolute top-0 left-0 ">
					<button
						className="border-2 rounded-lg px-4 py-1 shadow-md"
						onClick={() => nav(-1)}
					>
						Back
					</button>
				</div>

				{load ? (
					<Spinner />
				) : blog ? (
					<div>
						<Card postt={blog} />
						<h2 className="text-3xl font-bold mt-20">
							Related Blogs
						</h2>
						{relBlog.map((ele) => {
							return (
								<div key={ele.id}>
									<Card postt={ele} />
								</div>
							);
						})}
					</div>
				) : (
					<p>No Data Found</p>
				)}
			</div>
		</div>
	);
};

export default BlogPage;
