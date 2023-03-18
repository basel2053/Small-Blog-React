import { useNavigate } from 'react-router-dom';
import useLogout from '../hook/use-logout';
import CardWrapper from '../components/CardWrapper';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Pagination from '../components/pagination';
import Stat from '../components/Stat';

const Home = () => {
	const navigate = useNavigate();
	const logout = useLogout();

	const signOut = async () => {
		// ? apply it to the signout button
		await logout();
		navigate('/');
	};
	return (
		<>
			<Navbar />
			<CardWrapper />
			<div className='flex flex-col items-center'>
				<Stat />
				<Pagination />
			</div>
			<Footer />
		</>
	);
};

export default Home;
