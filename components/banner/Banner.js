import styles from '../../styles/Banner.module.css';

const Banner = ({ imgUrl }) => {
	return (
		<div
			className={styles.bannerImg}
			style={{
				backgroundImage: `url(${imgUrl}`,
			}}
		>
		</div>
	);
};

export default Banner;
