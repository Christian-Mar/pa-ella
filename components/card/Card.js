import styles from '../../styles/Card.module.css';
import Image from 'next/image';

const Card = ({imgUrl = '/images/plate.png', size = 'medium', title}) => {

  //imgUrl will be set in the create form, so the default img will be defined there

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
		<div className={styles.container}>
			<div className={classMap[size]}>
				<Image
					src={imgUrl}
					alt='Egg'
					layout='fill'
					className={styles.cardImg}
				/>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	);
}

export default Card
