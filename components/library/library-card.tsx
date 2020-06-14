import { LibraryEntry } from './LibraryEntry';
import styles from './library.module.scss';

const Playlist: React.FunctionComponent<{length: number}> = (props) => {
	const { length } = props;
	if (!length) return null;
	return (
		<div className={`${styles.playlist} flex flex-col justify-center content-center text-center`}>
			<span className={styles.playlist__title}>
				{length}
			</span>
			<span className={styles.playlist__type}>
				workouts
			</span>
			<img src="/playlist.svg" alt=""/>
		</div>
	);
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

export const LibraryCard: React.FunctionComponent<LibraryEntry & { delay: string }> = (props) => {
	const {
		image,
		thumbnail,
		title,
		time,
		distance,
		playlistLength,
		delay
	} = props;
	return (
		<div className={`${styles.card}`} style={{animationDelay: `.${delay}s`}}>
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
