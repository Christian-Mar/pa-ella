import { useState } from 'react';
import styles from '../../styles/StarRating.module.css';
import { FaStar } from 'react-icons/fa';


const StarRating = props => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div className={styles.starRating}>
			{[...Array(10)].map((star, index) => {
				index += 1;
				return (
					<button
						type='button'
						key={index}
						className={(index <= (hover || rating) ? styles.on : styles.off)}
						style={{backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', height: '30px'}}
						onClick={() => {
							props.changeScore(index);
							setRating(index);
						}}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className='star'>
							<FaStar />
						</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
