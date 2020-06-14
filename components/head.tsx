import _Head from 'next/head';

export const Head: React.FunctionComponent = (props) => {
	return <_Head>
		<title>Home | iFit Coach</title>
		<link rel="icon" href="/favicon.ico" />
		<link rel="stylesheet" href="https://unpkg.com/tailwindcss@1.4.6/dist/tailwind.min.css" />
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css' />
	</_Head>;
}
