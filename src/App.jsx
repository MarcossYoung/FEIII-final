import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom/dist';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import {routes} from './Routes';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.detail} element={<Detail />} />
				<Route path={routes.favs} element={<Favs />}></Route>
				<Route path={routes.contact} element={<Contact />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
