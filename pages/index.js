import Head from 'next/head';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
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
        <Navbar username="donald.duck@disney.com"/>
				<Banner
					title='Recepten'
					subTitle='voor ieder moment van de dag'
					imgUrl='/images/mixedcolors.jpg'
				/>
       
			
			</div>

			
		</div>
	);
}
