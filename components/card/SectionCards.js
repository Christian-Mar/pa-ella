import styles from '../../styles/SectionCards.module.css';
import Card from './Card';

const SectionCards = ({title}) => {
  return (
		<section className={styles.container}>
			<h2>{title}</h2>
			<div className={styles.Card__container}>
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
				<Card size='medium' title='default photo' />
			</div>
		</section>
	);
}

export default SectionCards
