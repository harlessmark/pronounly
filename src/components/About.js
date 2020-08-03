import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<p className='text-gray-900 mt-4 md:text-lg lg:text-xl'>
			Pronounly helps you share your gender pronoun with other people by pasting
			a link in your bio. Pronounly supports traditional gender pronouns:{" "}
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
			</Link>
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
			</Link>
			,{" "}
			<Link
				to='/sie'
				style={{
					backgroundColor: "#2d3748",
					color: "#f4f4f4",
					padding: "0 6px",
					borderRadius: "3px",
				}}>
				sie
			</Link>{" "}
			and{" "}
			<Link
				to='/xier'
				style={{
					backgroundColor: "#2d3748",
					color: "#f4f4f4",
					padding: "0 6px",
					borderRadius: "3px",
				}}>
				xier
			</Link>
			.
		</p>
	);
}

export default About;
