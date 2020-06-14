import { Footer } from '../components/footer/footer';
import { Equipment } from '../components/equipment/equipment';
import { Library } from '../components/library/library';
import { Slider } from '../components/slider/slider';
import { Hero } from '../components/hero/hero';
import { Head } from '../components/head';
import { Nav } from '../components/nav/nav';

export default function Home() {
	return (
		<>
			<Head />
			<Nav />
			<Hero />
			<Slider />
			<Library />
			<Equipment />
			<Footer />
		</>
	);
}
