interface Props {
	links: Record<string, string[]>
}

export const Nav: React.FunctionComponent<Props> = (props) => {
	const {links} = props;
	return (
		<nav className="primary">
			<div className="topbar">
				{links.topbar.map((l) => <a href="#">{l}</a>)}
			</div>
			<div className="logo"></div>
			<div className="main">
				{links.main.map((l) => <a href="#">{l}</a>)}
			</div>
		</nav>
	);
}

Nav.defaultProps = {
	links: {
		topbar: [
			'blog',
			'nourish',
			'shop'
		],
		main: [
			'exercise',
			'nutrition',
			'activity',
			'sleep'
		]
	}
};
