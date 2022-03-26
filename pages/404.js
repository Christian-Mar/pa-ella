import Link from 'next/link';
import Navbar from '../components/nav/Navbar';
import styles from '../styles/FourOFour.module.css';

const FourOFour = () => {
	return (
		<div>
      <Navbar />
      <div className={styles.container}>
			<h1>404 - Pagina niet gevonden</h1>
			<Link href='/'>
				<a>Go back home</a>
			</Link></div>
		</div>
	);
};

export default FourOFour;
