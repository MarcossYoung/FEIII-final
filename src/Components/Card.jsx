import React from 'react';

import {Link} from 'react-router-dom';

const Card = ({data, fav, setFav}) => {
	const addFav = () => {
		setFav([...fav, data]);
	};
	return (
		<div className='card'>
			<Link to={`/detail/${data.id}`}>
				<img src='/images/doctor.jpg' alt='stock_img' width='85%' />
				<p>{data.name}</p>
				<p>{data.username}</p>
				<h3>{data.id}</h3>
			</Link>
			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
			<button onClick={addFav} className='favButton'>
				Add fav
			</button>
		</div>
	);
};

export default Card;
