import React from "react";
import Head from "next/head";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Eglo</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
