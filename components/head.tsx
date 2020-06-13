import _Head from 'next/head';

export const Head: React.FunctionComponent = (props) => {
	return <_Head>
		<title>Home | iFit Coach</title>
		<link rel="icon" href="/favicon.ico"/>
		<link rel="stylesheet" href="https://unpkg.com/tailwindcss@1.4.6/dist/tailwind.min.css"/>
	</_Head>;
}
