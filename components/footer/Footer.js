import { useRouter } from 'next/router';
import styles from '../../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {

  const router = useRouter();

	const handleOnClickAbout = e => {
		e.preventDefault();
		router.push('/about');
	};



	return (
		<div className={styles.footer__container}>
			<ul className={styles.footer__list}>
				<li
					onClick={handleOnClickAbout}
					className={styles.footer__listItem}
				>
					<Link href='/create-recipe'>
						<a>Over pa'el-la</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
