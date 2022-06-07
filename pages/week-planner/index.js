import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from '../../styles/Weekplanner.module.css';
import { db } from '../../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

export const getServerSideProps = async () => {
	const querySnapshot = await getDocs(collection(db, 'recipes'));
	let recipes = [];

	querySnapshot.forEach(doc => {
		recipes.push({ ...doc.data(), id: doc.id });
	});

	return {
		props: { recipes: JSON.stringify(recipes) || null },
	};
};

const WeekPlanner = ({ recipes }) => {
	//const [filters, setFilters] = useState({});
	const [positions, setPositions] = useState();
	const { user } = useAuthContext();
	const recipesReadable = JSON.parse(recipes);
	const recipesData = Array.from(recipesReadable);
	
	const onDragEnd = result => {
		if(!result.destination) return;
		const items = Array.from(positions);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setPositions(items);
	};

	return (
		<div>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='Weekplanner' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<Navbar />
				<h1>Weekplanner</h1><div className={styles.planning__container}>
						The planning will come here
					</div>
				<DragDropContext onDragEnd={onDragEnd}>
					
				
						<Droppable
							//key={uuidv4()}
							doppableId='recipes'
							className={styles.recipe__listitems}
						>
							{provided => (
								<ul
									className={styles.recipe__list}
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{recipesData?.map(
										(recipe, index) =>
											recipe.category === 'dessert' && (
												<Draggable key={recipe.id} draggableId={recipe.id} index={index}>
												{(provided) => (
													<li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
													
													className={styles.recipe__listitems}
												>
													<div>
														<h3 className={styles.recipe__title}>
															{recipe.title}
														</h3>
														<h4 className={styles.recipe__category}>
															{recipes.methodTime}
														</h4>
														<Image
															src={recipe.image}
															alt='Dish'
															width={200}
															height={150}
															objectFit='cover'
														></Image>
													</div>
												</li>)}
												</Draggable>
											)
									)}
									{provided.placeholder}
								</ul>
							)}
						</Droppable>
					
				</DragDropContext>
			</div>
			<Footer />
		</div>
	);
};

export default WeekPlanner;
