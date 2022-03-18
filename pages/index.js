import Head from 'next/head';
import Banner from '../components/banner/banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='The recipe website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Banner
					title='Recepten'
					subTitle='voor ieder moment van de dag'
					imgUrl='/images/colored_bg.jpg'
				/>
        <p>test</p>
			
			</main>

			
		</div>
	);
}
