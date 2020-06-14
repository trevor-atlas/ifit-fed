import { LibraryCard } from './library-card';
import { LibraryEntry } from './LibraryEntry';
import { useLayoutEffect, useRef, useState } from 'react';

interface Props {
	entries: LibraryEntry[];
}

export const Library: React.FunctionComponent<Props> = (props) => {
	const {entries} = props;
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
		<div ref={ourRef} className="container mx-auto flex flex-wrap justify-center py-10" style={{ minHeight: 600 }}>
			{ visible && entries.map((e, i) => <LibraryCard key={i} {...e} delay={i} />)}
		</div>
	)
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
