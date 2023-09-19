import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ postt }) => {
	console.log(postt);
	console.log(postt.id);
	return (
		<div>
			<div>
				<NavLink to={`/blog/${postt.id}`}>
					<p className="font-bold text-lg mb-1 mt-8">{postt.title}</p>
				</NavLink>

				<p className="text-sm">
					By <span className="italic">{postt.author}</span> on{" "}
					<NavLink
						to={`/categories/${postt.category.replaceAll(" ", "-")}`}
					>
						<span className="underline font-bold">
							{postt.category}
						</span>
					</NavLink>
				</p>
				<p className="text-sm mb-4">{`posted On ${postt.date}`} </p>
				<p>{postt.content}</p>
				<div>
					{postt.tags.map((t, idx) => (
						<NavLink
							to={`/tags/${t.replaceAll(" ", "-")}`}
							key={idx}
						>
							<span className="text-xs underline text-blue-600 font-semibold mr-3">
								#{t}
							</span>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
