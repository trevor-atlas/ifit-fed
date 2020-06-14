import styles from './social-icon.module.scss';

interface Props {
	iconUrl: string;
	linkUrl: string;
	name: string;
	className
}

export const SocialIcon: React.FunctionComponent<Props> = (props) => {
	const { iconUrl, linkUrl, name, className } = props;
	return (
		<a className={className} href={linkUrl}>
			<div className={`${styles.bg} flex items-center content-center justify-center`}>
				<div className={`${styles.bg_inner} flex items-center content-center justify-center`}>
				<img width={20} height={20} src={iconUrl} alt={name}/>
				</div>
			</div>
		</a>
	)
}
