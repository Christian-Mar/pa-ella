import styles from '../styles/stepByStep.module.css';
import Image from 'next/image';
import Navbar from '../components/nav/Navbar';

const stepByStep = () => {
  return (
    <div>
    <Navbar />
    <div className={styles.plan__container}>

      <h1>Het plan</h1>

			<div>
				<h2 className={styles.h2}>1. Wireframe</h2>
				<div className={styles.wireframe__container}>
					<div className={styles.wireframe__image}>
						<Image src='/images/1.png' alt='Home page' width={500} height={400} />
					</div>
					<div className={styles.wireframe__image}>
						<Image
							src='/images/2.png'
							alt='Signup or signin modal'
							width={500}
							height={400}
						/>
					</div>
					<div className={styles.wireframe__image}>
						<Image
							src='/images/3.png'
							alt='Profile'
							width={500}
							height={400}
						/>
					</div>
					<div className={styles.wireframe__image}>
						<Image src='/images/4.png' alt='Detail of card' width={500} height={400} />
					</div>
					<div className={styles.wireframe__image}>
						<Image
							src='/images/5.png'
							alt='Detail of recipe'
							width={500}
							height={400}
						/>
					</div>
					<div className={styles.wireframe__image}>
						<Image
							src='/images/6.png'
							alt='Detail of create recipe'
							width={500}
							height={400}
						/>
					</div>
					<div className={styles.wireframe__image}>
						<Image src='/images/7.png' alt='Weekplanner' width={500} height={400} />
					</div>
					<div className={styles.wireframe__image}>
						<Image src='/images/8.png' alt='Shopping list' width={500} height={400} />
					</div>
				</div>
			</div>

			<div>
				<div className={styles.firstline}>
					<h2 className={styles.h2}>2. Moodboard</h2>
					<div className={styles.moodboard__container}>
						<div className={styles.moodboard__image}>
							<Image src='/images/Green.png' alt='Green' width={500} height={400} />
						</div>
            <div className={styles.moodboard__image}>
							<Image src='/images/Gradients.png' alt='Error' width={500} height={400} />
						</div>
						<div className={styles.moodboard__image}>
							<Image
								src='/images/Pink - blue.png'
								alt='Pink & blue'
								width={500}
								height={400}
							/>
						</div>
						

						<div className={styles.moodboard__image}>
							<Image
								src='/images/WhiteCards.png'
								alt='Cards'
								width={500}
								height={400}
							/>
						</div>
						<div className={styles.moodboard__image}>
							<Image
								src='/images/Glassmorphism.png'
								alt='Glassmorphism'
								width={500}
								height={400}
							/>
						</div>
						<div className={styles.moodboard__image}>
							<Image src='/images/GlassCards.png' alt='Error' width={500} height={400} />
						</div>
					</div>
				</div>
			</div>
    </div>
    </div>
  )
}

export default stepByStep
