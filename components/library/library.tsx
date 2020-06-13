import styles from './library.module.scss';

class LibraryEntry {
	constructor(
		public image: string,
		public thumbnail: string,
		public title: string,
		public time: string,
		public distance: string,
		public playlistLength: number,
	) { }
}

const Playlist: React.FunctionComponent<{length: number}> = (props) => {
	const { length } = props;
	if (!length) return null;
	return <div className={`${styles.playlist} flex flex-col justify-center content-center text-center`}>
		<span className={styles.playlist__title}>
			{length}
		</span>
		<span className={styles.playlist__type}>
			workouts
		</span>
		<img src="/playlist.svg" alt=""/>
	</div>

}

const CardMetadata: React.FunctionComponent<{ time: string; distance: string; }> = (props) => {
	const { time, distance } = props;
	return (
		<>
			{(time || distance) && <div className={`flex flex-row items-start py-2`}>
				{time ?
					<span className={`${styles.metadata} mr-2 inline-block`}>
								<img className="inline-block mr-1" src="/timer.png" alt=""/>
								<span>{time}</span>
							</span>
					: null
				}
				{distance ?
					<span className={`${styles.metadata} mr-2 inline-block`}>
								<img className="inline-block mr-1" src="/distance.png" alt=""/>
							<span>{distance}</span>
						</span>
					: null}
			</div>}
		</>
	);
};

export const LibraryCard: React.FunctionComponent<LibraryEntry> = (props) => {

	const {
		image,
		thumbnail,
		title,
		time,
		distance,
		playlistLength,
	} = props;
	console.log(title);
	return (
		<div className={styles.card}>
			<img className={styles.image} src={`/${image}`} alt=""/>
			<Playlist length={playlistLength} />
			<div className={`${styles.content_container} flex `}>
				<div className="flex flex-col flex-grow justify-between">
					<div>
						<div className={`${styles.title_row} flex flex-row justify-between`}>
							<span className={styles.title}>{title}</span>
							<img className={styles.thumbnail} src={`/${thumbnail}`} alt=""/>
						</div>
						<CardMetadata time={time} distance={distance} />

					</div>
					<div className="items-start">
						<button className={styles.details_button}>view details</button>
					</div>
				</div>
			</div>

		</div>
	);
};

interface Props {
	entries: LibraryEntry[];
}

export const Library: React.FunctionComponent<Props> = (props) => {
	const {entries} = props;
	return (
		<div className="container mx-auto flex flex-wrap justify-center py-10">
			{entries.map((e, i) => <LibraryCard key={i} {...e} />)}
		</div>
	);
};

Library.defaultProps = {
	entries: [
		new LibraryEntry('lib1.png', 'lib1-thumb.png', 'Lake Inniscarra, Ireland–Pyramid', '30:53', '6,248 M', 0),
		new LibraryEntry('lib2.png', 'lib2-thumb.png', 'Performance Series', null, null, 9),
		new LibraryEntry('lib3.png', 'lib3-thumb.png', 'Slow Pulls and Fast Intervals', '44:13', '9,948 M', 0),
		new LibraryEntry('lib4.png', 'lib4-thumb.png', '20 Minutes to Toned', null, null, 12),
		new LibraryEntry('lib5.png', 'lib5-thumb.png', 'Charles Race, Boston, Massachusetts', '36:22', '8,648 M', 0),
		new LibraryEntry('lib6.png', 'lib6-thumb.png', 'Full-Body HIIT Series', null, null, 12),
		new LibraryEntry('lib7.png', 'lib7-thumb.png', 'Kafue River, Zambia–Power Stroke Pyramid', '22:22', '4,660 M', 0),
		new LibraryEntry('lib8.png', 'lib8-thumb.png', 'Shred & Burn Series', null, null, 16)
	]
};
