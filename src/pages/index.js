import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";

export default function Page() {
  const [heroText, setHeroText] = useState("")

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      changeText()
    }, 5000);

    return () => clearInterval(textChangeInterval);
  }, []);

  async function changeText() {
    let text_array = ["sync", "share", "save", "secure"]

    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    }

    const chosen_text = text_array.sample()

    setHeroText(chosen_text)
  }

	return (
		<main>
			<div className="sticky">
				<Navbar className="sticky top-0" />
			</div>
			<div className="hero min-h-screen bg-base-100 -mt-10">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">
							A new way to <ul>sync</ul>
						</h1>
						<p className="py-6">Experience a level of inter-connected device functionality never before brought to such a wide ecosystem with such interactivity and robustness.</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</main>
	);
}
