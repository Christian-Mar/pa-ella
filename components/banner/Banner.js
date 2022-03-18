import styles from '../../styles/Banner.module.css';
import Image from 'next/image';

const Banner = ({ title, subTitle, imgUrl }) => {
	return (
		<div
			className={styles.bannerImg}
			style={{
				backgroundImage: `url(${imgUrl}`,
			}}
		>
			<h3 className={styles.title}>{title}</h3>
			<h3 className={styles.subTitle}>{subTitle}</h3>
			<div className={styles.searchContainer}>
				<div className={styles.searchBar}>
					<input type='text' className={styles.searchInput} />
					
					<Image
            className={styles.searchIcon}
						src='/images/search_black.svg'
						alt='search-icon'
						width='24px'
						height='24px'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
