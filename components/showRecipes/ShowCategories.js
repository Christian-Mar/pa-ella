import Image from 'next/image';
import { useCollection } from '../../hooks/useCollection';
import Carousel from 'react-elastic-carousel';
import { CarouselContainer } from '../../styles/slider';
import styles from '../../styles/Home.module.css';

const breakPoints = [
	{ width: 300, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 5 },
	{ width: 1400, itemsToShow: 6 },
];

export default function ShowCategories({ title, category }) {
	const { documents: recipes } = useCollection('recipes');

	return (
		<div className={styles.list}>
			<h4 className={styles.section__title}>{title}</h4>
			<CarouselContainer>
				<Carousel breakPoints={breakPoints}>
					{recipes?.map(
						recipe =>
							recipe.category === category && (
								<li key={recipe.id} className={styles.recipe__listitems}>
									<div>
										<h3 className={styles.recipe__title}>{recipe.title}</h3>
										<Image
											src={recipe.image}
											alt='Dish'
											width={200}
											height={150}
											objectFit='cover'
										></Image>
									</div>
								</li>
							)
					)}
				</Carousel>
			</CarouselContainer>
		</div>
	);
}
