import React from "react";
import { Link } from "react-router-dom";

function Contribute() {
	return (
		<div>
			<h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
				Contributing
			</h2>

			<p className='text-gray-900 md:text-lg lg:text-xl'>
				Pronounly supports traditional gender pronouns:{" "}
				<Link
					to='/he'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					He
				</Link>
				,{" "}
				<Link
					to='/she'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					she
				</Link>{" "}
				and{" "}
				<Link
					to='/they'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					they
				</Link>{" "}
				as well as common German pronouns:{" "}
				<Link
					to='/er'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					er
				</Link>{" "}
				and{" "}
				<Link
					to='/sie'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					sie
				</Link>
				. If you are interested in contributing to this project, please submit a
				pull request with your changes to the{" "}
				<a
					href='https://github.com/superhackerboy/pronounly'
					target='_blank'
					rel='noopener noreferrer'
					style={{
						backgroundColor: "#2d3748",
						color: "#f4f4f4",
						padding: "0 6px",
						borderRadius: "3px",
					}}>
					repository
				</a>
				.
			</p>
		</div>
	);
}

export default Contribute;
