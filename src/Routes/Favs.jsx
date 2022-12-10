import React from 'react';
import Card from '../Components/Card';

const Favs = () => {
	const favs = JSON.parse(localStorage.getItem('fav'));

	console.log(favs);
	return (
		<>
			<h1>Dentists Favs</h1>
			<div className='card-grid'>
				{favs?.map((d) => (
					<Card key={d.id} data={d} />
				))}
				{/* este componente debe consumir los destacados del localStorage */}
				{/* Deberan renderizar una Card por cada uno de ellos */}
			</div>
		</>
	);
};

export default Favs;
