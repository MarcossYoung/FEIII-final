import React from 'react';
import {useGlobalStates} from '../Components/utils/global.context';
import Card from '../Components/Card';
import {useState} from 'react';
import {useEffect} from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const [fav, setFav] = useState([]);

	const {data} = useGlobalStates();
	console.log(data);

	useEffect(() => {
		localStorage.setItem('fav', JSON.stringify(fav));
	}, [fav]);

	return (
		<main className=''>
			<h1>Home</h1>

			<div className='card-grid'>
				{data?.map((d) => (
					<Card data={d} fav={fav} setFav={setFav} />
				))}
			</div>
		</main>
	);
};

export default Home;
