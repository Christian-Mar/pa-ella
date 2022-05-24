import { useRouter } from 'next/router';
import styles from '../../styles/Footer.module.css';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	const router = useRouter();

	const handleOnClickAbout = e => {
		e.preventDefault();
		router.push('/about');
	};

	const handleOnClickAboutTheMakingOf = e => {
		e.preventDefault();
		router.push('/makingOf');
	}

	return (
		<div>
			<div className={styles.footer__container}>
				<ul className={styles.footer__list}>
					<li onClick={handleOnClickAbout} className={styles.footer__listItem}>
						<Link href='/about'>
							<a>Over pa'el-la</a>
						</Link>
					</li>
					<li onClick={handleOnClickAboutTheMakingOf} className={styles.footer__listItem}>
						<Link href='/about'>
							<a>Over het maken van deze website</a>
						</Link>
					</li>
				</ul>
				<div className={styles.footer__github}>
					<a
						href='https://github.com/Christian-Mar/paella'
						target='_blank'
						rel='noopener noreferrer'
					>
						De code staat gepubliceerd op Github <FaGithub />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
