import { Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import useAuth from './hook/use-auth';
import RequireAuth from './components/RequireAuth';
import PresistenceLogin from './token/PresistenceLogin';

const App = () => {
	const { isLogged } = useAuth();
	console.log(isLogged);

	return (
		<Routes>
			<Route element={<PresistenceLogin />}>
				<Route path='/' element={!isLogged?.accessToken ? <Home /> : <GetStarted />} />
			</Route>
			<Route path='/signup' element={<Signup />} />
			<Route path='/login' element={<Login />} />

			{/* HERE  put our protected routes  inside presistenceLogin and requireAuth*/}
			{/* <Route element={<PresistenceLogin />}><Route element={<RequireAuth/>}></Route></Route> */}
		</Routes>
	);
};

export default App;
