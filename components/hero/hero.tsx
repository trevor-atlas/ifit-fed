import { Button } from '../button/button';
import styles from './hero.module.scss';

interface Props {
	heading: string;
}

export const Hero: React.FunctionComponent<Props> = (props) => {
	const { heading } = props;
	return (
		<div className={styles.root}>
			<div className={`${styles.hero} flex flex-col content-center items-center py-56`}>
				<h1 className={`${styles.heading} ${styles.slideBottom} mb-6`}>{heading}</h1>
				<Button className={styles.button}>join iFit coach</Button>
			</div>
			<div className={styles.mask}></div>
		</div>
	);
}

Hero.defaultProps = {
	heading: 'The best personal training, right in your own home'
}
