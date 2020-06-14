import { useLayoutEffect, useRef, useState } from 'react';
import styles from './equipment.module.scss';

class EquipmentItem {
	constructor(
		public title: string,
		public image: string
	) { }
}

const EquipmentCard: React.FunctionComponent<EquipmentItem & { delay: number }> = (props) => {
	const { title, image, delay } = props;
	return (
		<div className={`${styles.card} flex-1`} style={{animationDelay: `.${delay}s`}}>
			<div className="flex flex-col items-center content-center">
				<div className={styles.card_image_wrapper}>
					<img className={styles.card_image} src={`/${image}`} alt={title} />
				</div>
				<h1 className={styles.card_title}>{title}</h1>
			</div>
		</div>
	);
}

interface Props {
	title: string;
	equipment: EquipmentItem[];
}

export const Equipment: React.FunctionComponent<Props> = (props) => {
	const { title, equipment } = props;
	const [visible, setVisibility] = useState(false);

	const ourRef = useRef(null);
	useLayoutEffect(() => {
		const topPosition = ourRef.current.getBoundingClientRect().top;
		const onScroll = () => {
			const scrollPosition = (window.scrollY + window.innerHeight) * .8;
			if (topPosition < scrollPosition) {
				setVisibility(true);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
		/*
		   remove the event listener in the cleanup function
		   to prevent memory leaks
		*/
	}, []);

	return (
		<div ref={ourRef} className="flex flex-col items-center content-center justify-center pb-10" style={{ minHeight: 500 }}>
			{visible && (
				<>
					<h1 className={styles.title}>{title}</h1>
					<div className={`${styles.card_container} flex flex-col lg:flex-row flex-wrap  justify-center w-full mx-auto`}>
					{equipment.map((e, i) => <EquipmentCard {...e} delay={i} />)}
					</div>
				</>
			)}
		</div>
	);
}

Equipment.defaultProps = {
	title: 'Interested in our exciting iFit-enabled equipment?',
	equipment: [
		new EquipmentItem('Treadmills', 'treadmill.png'),
		new EquipmentItem('Bikes', 'bikes.png'),
		new EquipmentItem('Ellipticals', 'elliptical.png'),
		new EquipmentItem('Strength', 'strength.png'),
	]
}
