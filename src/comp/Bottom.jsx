import React, { useContext } from "react";
import { AppContextH } from "../context/AppContext";

const Bottom = () => {
	const { page, maxpage, PageChanger } = useContext(AppContextH);

	return (
		<div className="fixed bg-white bottom-0 w-full border-t-2 border-gray-300 mt-12 py-2 ">
			<div className="w-11/12 max-w-[680px] flex items-baseline justify-between mx-auto">
				<div className="flex gap-3">
					{page != 1 && (
						<button
							onClick={() => PageChanger(page - 1)}
							className="border-2 border-gray-300 px-3 py-1 rounded-lg"
						>
							Previous
						</button>
					)}

					{page != maxpage && (
						<button
							onClick={() => PageChanger(page + 1)}
							className="border-2 border-gray-300 px-4 py-1 rounded-lg"
						>
							Next
						</button>
					)}
				</div>

				<p className="font-semibold text-sm">{`Page ${page} of ${maxpage}`}</p>
			</div>
		</div>
	);
};

export default Bottom;
