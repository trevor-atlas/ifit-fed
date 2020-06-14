import { SocialIcon } from '../social-icon/social-icon';
import styles from './footer.module.scss';

class FooterLink {
	constructor(
		public url: string,
		public text: string
	) { }
}

interface Props {
	primaryLinks: Record<string, FooterLink[]>;
	socialLinks: FooterLink[];
	legal: Array<FooterLink|string>;
}

export const Footer: React.FunctionComponent<Props> = (props) => {
	const { primaryLinks, socialLinks, legal } = props;
	return (
		<footer className={styles.footer}>
			<div className={`${styles.primary} flex flex-col md:flex-row items-center md:items-start content-center justify-center py-6 max-w-3xl mx-auto`}>
				{Object.keys(primaryLinks).map((key) => (
					<>
						<ul className="w-1/3 p-4 md:pt-4 md:pb-2">
							<h4>{key}</h4>
							{primaryLinks[key].map((link) => <li><a href={link.url}>{link.text}</a></li>)}
						</ul>
					</>
					))
				}
			</div>
			<div className={`${styles.social} flex flex-row justify-center py-4`}>
				{socialLinks.map((link) => (
					<SocialIcon
						className="px-2 md:px-4"
						linkUrl={link.url}
						iconUrl={`${link.text}.svg`}
						name={link.text}
					/>)
				)}

			</div>
			<div className={`${styles.trademark} flex flex-row justify-center py-4`}>
				{
					legal.map((tm) => {
						if (typeof tm === 'string') return <span className="px-2 md:px-4">{tm}</span>;
						return <a className="px-2 md:px-4" href={tm.url}>{tm.text}</a>
					})
				}

			</div>
		</footer>
	);
};

Footer.defaultProps = {
	primaryLinks: {
		Company: [
			new FooterLink('#', 'About'),
			new FooterLink('#', 'Contact Us'),
			new FooterLink('#', 'Careers'),
		],
		Account: [
			new FooterLink('#', 'Log In'),
			new FooterLink('#', 'Create Account'),
		],
		Support: [
			new FooterLink('#', 'Help Center'),
			new FooterLink('#', 'Accessibility'),
		]
	},
	socialLinks: [
		new FooterLink('#', 'youtube'),
		new FooterLink('#', 'pinterest'),
		new FooterLink('#', 'facebook'),
		new FooterLink('#', 'twitter'),
		new FooterLink('#', 'instagram'),
	],
	legal: [
		'\u00A9 iFit.com. All Rights Reserved.',
		new FooterLink('#', 'Privacy Policy'),
		new FooterLink('#', 'Terms of Use'),
	]
}
