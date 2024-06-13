import React, { useState, useEffect } from "react";

export default function Page() {
	return (
		<main>
			<div className="h-screen flex items-center justify-center">
				<div className="card w-96 bg-base-200 shadow-xl">
					<div className="card-body">
						<div>
							<h3 className="card-title">Success!</h3>
						</div>
						<div className="mt-4">
							<p>You have been successfully pre-registered, we will send you an email when you are able to create an account.</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
