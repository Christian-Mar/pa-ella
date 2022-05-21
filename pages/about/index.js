import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

const About = () => {
	return (
		<div>
			<Head>
				<title>Over pa'ella</title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<h1>Over pa'el-la</h1>
      <Footer />
		</div>
	);
};

export default About;
