import Head from "next/head";

const layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Relationships</title>
			</Head>
			<main>{children}</main>
		</div>
	);
};

export default layout;
