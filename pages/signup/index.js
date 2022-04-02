import Navbar from '../../components/nav/Navbar';
import Banner from '../../components/banner/Banner';
import Signup from '../../components/authentication/Signup';

export default function LoginPage() {
	return (
		<div>
			<Navbar />
			<Banner imgUrl='/images/bannercolor.jpg' />
			<Signup />
		</div>
	);
}
