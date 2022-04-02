
import Navbar from '../../components/nav/Navbar';
import Banner from '../../components/banner/Banner';
import Login from '../../components/authentication/Login';

export default function LoginPage() {
	

	return (
		<div>
			<Navbar />
			<Banner imgUrl='/images/bannercolor.jpg' />
			<Login />
		</div>
	);
}
