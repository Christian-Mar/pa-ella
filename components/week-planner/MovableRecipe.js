import { useState} from 'react';
import { useDrag } from 'react-dnd';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/MovableRecipe.module.css';


function MovableRecipe({
	id,
	title,
	methodTime,
	photo,
	dropped,
	handleRemove,
	index
}) {
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: 'li',
		item: { id: id, title: title, methodTime: methodTime, photo: photo, index: index},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const deleteProduct = () => {handleRemove(id, index)} 

	return (
		<li ref={dragRef} key={id} className={styles.recipe__listitems}>
			<div>
				<div>
					{dropped && (
						<div className={styles.recipe__remove}>
							<div onClick={deleteProduct}>
								<FaTimes />
							</div>
						</div>
					)}
				</div>
				<Link href={`/recipe-detail/${id}`}>
					<div className={styles.recipe__link}>
						<h3 className={styles.recipe__title}>{title}</h3>
						<h4 className={styles.recipe__category}>{methodTime}</h4>
						<Image
							src={photo}
							alt='Dish'
							width={120}
							height={90}
							objectFit='cover'
						></Image>
					</div>
				</Link>
			</div>
		</li>
	);
}

export default MovableRecipe;
