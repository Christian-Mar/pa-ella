import Head from 'next/head';
import Navbar from '../../components/nav/Navbar';
import Banner from '../../components/banner/Banner';
import Login from '../../components/authentication/Login';

export default function LoginPage() {
	return (
		<div>
			<Head>
				<title>pa'el-la </title>
				<meta name='description' content='Recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<Navbar />
			<Banner imgUrl='/images/ellas.jpg' />
			<Login />
		</div>
	);
}
