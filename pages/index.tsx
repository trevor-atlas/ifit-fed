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

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className="logo"/>
				</a>
			</footer>
		</>
	);
}
