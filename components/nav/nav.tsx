import { Button } from '../button/button';
import styles from './nav.module.scss';

interface Props {
	links: Record<string, string[]>
}

export const Nav: React.FunctionComponent<Props> = (props) => {
	const { links } = props;
	return (
		<nav className="primary">
			<div className={`${styles.product_nav} flex`}>
				{links.topbar.map((l) => <a href="#">{l}</a>)}
			</div>
			<div className={`${styles.coach_nav} flex-col md:flex-row flex flex-wrap  justify-between items-center`}>
				<a className="mx-auto md:mx-0" href="#">
					<img src="/ifit-coach-logo.svg" alt="iFit"/>
				</a>
				<div className={`${styles.links} flex flex-col md:flex-row py-6 md:p-0 mx-auto md:mx-0`}>
					{links.main.map((l) => <a href="#">{l}</a>)}
				</div>
				<div className="mx-auto md:m-0">
					<Button>sign up</Button>
				</div>
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
