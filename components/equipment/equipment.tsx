import styles from './equipment.module.scss';

class EquipmentItem {
	constructor(
		public title: string,
		public image: string
	) { }
}

const EquipmentCard: React.FunctionComponent<EquipmentItem> = (props) => {
	const { title, image } = props;
	return (
		<div className={`${styles.card} flex-1`}>
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
	return (
		<div className="flex flex-col items-center content-center justify-center">
			<h1 className={styles.title}>{title}</h1>
			<div className={`${styles.card_container} flex flex-col lg:flex-row flex-wrap  justify-center w-full mx-auto`}>
				{equipment.map((e) => <EquipmentCard {...e} />)}
			</div>
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
