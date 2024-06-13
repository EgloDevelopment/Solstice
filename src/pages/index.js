import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";

export default function Page() {
	const [heroText, setHeroText] = useState("sync");
	const [heroTextOpacity, setHeroTextOpacity] = useState(1);

	useEffect(() => {
		const textChangeInterval = setInterval(() => {
			changeText();
		}, 5000);

		return () => clearInterval(textChangeInterval);
	}, []);

	async function changeText() {
		let text_array = ["sync", "share", "save", "secure", "organize", "collaborate"];

		Array.prototype.sample = function () {
			return this[Math.floor(Math.random() * this.length)];
		};

		const chosen_text = text_array.sample();

		setHeroTextOpacity(0);

		setTimeout(() => {
			setHeroText(chosen_text);
			setHeroTextOpacity(1);
		}, 500);
	}

	return (
		<main>
			<Navbar />
			<div className="hero min-h-screen bg-base-100 -mt-10">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">
							A new way to{" "}
							<p className="underline decoration-primary transition-opacity duration-500" style={{ opacity: heroTextOpacity }}>
								{heroText}
							</p>
						</h1>
						<p className="py-6">Experience a level of inter-connected device functionality never before brought to such a wide ecosystem with such interactivity and robustness.</p>
						<a href="/register" className="btn btn-primary">
							Pre-register
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
