import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useGlobalStates} from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const {theme, setTheme} = useGlobalStates();

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	return (
		<nav>
			<div align='left' width='75%'>
				<h1 textalign='left'>DH Odonto</h1>
			</div>
			<div align='right' width='25%'>
				<Link to='/'>Home</Link>
				<Link to='/favs'>Favs</Link>
				<Link to='/Contact'>Contacto</Link>
			</div>

			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button onClick={toggleTheme}>Change theme</button>

			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
		</nav>
	);
};

export default Navbar;
