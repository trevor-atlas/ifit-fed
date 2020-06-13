import { useEffect, useState } from 'react';
import styles from './slider.module.scss';

class SliderSlide {
	constructor(
		public icon: string,
		public quote: string
	) {}
}

interface Props {
	slides: SliderSlide[];
}

export const Slide: React.FunctionComponent<SliderSlide> = (props) => {
	const {quote, icon} = props;
	return (
		<div className={`${styles.slide} flex-grow-0 flex flex-col items-center`}>
			<img className={styles.icon} src={`/${icon}`} alt={icon.replace(/\..*/, '')}/>
			<blockquote className={styles.quote}>{quote}</blockquote>
		</div>
	);
}

export const Slider: React.FunctionComponent<Props> = (props) => {
	const {slides} = props;
	const [slideIndex, setSlideIndex] = useState(0);
	const [numberOfSlides, setNumberOfSlides] = useState(0);

	useEffect(() => {
		setNumberOfSlides(Math.ceil(window.innerWidth / 440));
	  }, []);

	const prev = () => {
		const idx = slideIndex-1 < 0 ? slides.length-1 : slideIndex-1;
		setSlideIndex(idx % slides.length);
	}
	const next = () => {
		setSlideIndex(slideIndex+1 % slides.length);
	}

	const visibleSlides = [];
	// create a rotating view of n slides
	for (let i = slideIndex; i < slideIndex+numberOfSlides; i++) {
		visibleSlides.push(slides[i % slides.length]);
	}
	return (
		<div className={`${styles.slider} flex items-center content-center justify-center `}>
				<button className={styles.left_ctrl} onClick={prev}></button>
				<div className="flex items-center content-center">
					{visibleSlides.map((s) => <Slide {...s} />)}
				</div>
				<button className={styles.right_ctrl} onClick={next}></button>
		</div>
	);
}

Slider.defaultProps = {
	slides: [
		new SliderSlide('gear-junkie-logo.svg', '“You focus on putting in the work, and the technology handles the rest.”'),
		new SliderSlide('wired-logo.svg', '“Literally transports you from home to wherever you choose to run.”'),
		new SliderSlide('mashable-logo.svg', '“Breathes new life into a tired, old running routine.”'),
		new SliderSlide('gear-junkie-logo.svg', '“You focus on putting in the work, and the technology handles the rest.”'),
		new SliderSlide('wired-logo.svg', '“Literally transports you from home to wherever you choose to run.”'),
		new SliderSlide('mashable-logo.svg', '“Breathes new life into a tired, old running routine.”'),
		new SliderSlide('gear-junkie-logo.svg', '“You focus on putting in the work, and the technology handles the rest.”'),
		new SliderSlide('wired-logo.svg', '“Literally transports you from home to wherever you choose to run.”'),
		new SliderSlide('mashable-logo.svg', '“Breathes new life into a tired, old running routine.”'),
	]
}
