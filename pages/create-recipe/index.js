import Navbar from '../../components/nav/Navbar';
import styles from '../../styles/CreateRecipe.module.css';

const index = () => {
	return <div className={styles.container}>
  <Navbar />
  <h1>Create Recipe</h1>
  </div>;
};

export default index;
