import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import Card from '../components/card/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar username='donald.duck@disney.com' />
				<Banner
					title='Recepten'
					subTitle='voor ieder moment van de dag'
					imgUrl='/images/pepper.png'
				/>
				<div className={styles.image__container}>
					<Card imgUrl='/images/cardVeggie.jpg' size='medium' title='Salade' />
					<Card
						imgUrl='/images/cardHamburger.jpg'
						size='medium'
						title='Hamburger'
					/>
					<Card
						imgUrl='/images/cardSpaghetti.jpg'
						size='medium'
						title='Spaghetti'
					/>
					<Card
    
						size='medium'
						title='default photo'
					/>
				</div>
			</div>
		</div>
	);
}
