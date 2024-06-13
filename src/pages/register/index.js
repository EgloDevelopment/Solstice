import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Page() {
	const [errorStatus, setErrorStatus] = useState([]);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	async function preRegister() {
		let response = await axios({
			validateStatus: () => true,
			method: "post",
			url: "https://celestia.eglo.pw/v1/authentication/pre-register",
			data: {
				name: name,
				email: email,
			},
		});

		if (response.status === 200) {
			setErrorStatus([]);
			window.location.href = "/register/success";
		} else {
			setErrorStatus(response.data);
		}
	}

	return (
		<main>
			<div className="h-screen flex items-center justify-center">
				<div className="card w-96 bg-base-200 shadow-xl">
					<div className="card-body">
						<div>
							<h3 className="card-title">Pre-Register</h3>
							<p className="text-sm">Let's start on a good note</p>
						</div>
						<div className="mt-4">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Enter your name</span>
								</div>
								<input type="tel" placeholder="John Doe" className="input input-bordered w-full max-w-xs bg-base-200" value={name} onChange={(e) => setName(e.target.value)} />
							</label>
						</div>
						<div className="mt-1">
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">Now enter your email</span>
								</div>
								<input type="email" placeholder="you@example.com" className="input input-bordered w-full max-w-xs bg-base-200" value={email} onChange={(e) => setEmail(e.target.value)} />
							</label>
						</div>
						<div className="card-actions justify-end mt-10">
							<button onClick={() => preRegister()} className="btn btn-primary">
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
			{errorStatus.length > 1 && (
				<div className="absolute bottom-0 left-0 m-4">
					<div className="bg-base-200 rounded-2xl p-4 shadow-xl">
						<div>
							<p className="text-red-500 capitalize">
								{errorStatus[0].path}: {errorStatus[0].message}
							</p>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
