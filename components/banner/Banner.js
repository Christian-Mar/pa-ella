import styles from '../../styles/Banner.module.css';

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
				</div>
			
	);
};

export default Banner;
