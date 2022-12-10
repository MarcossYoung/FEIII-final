/* eslint-disable no-template-curly-in-string */
import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
	const param = useParams();
	const [dent, setDent] = useState({});

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${param.id}`;
		axios(url).then((res) => setDent(res.data));
	}, [param]);
	console.log(param);

	return (
		<>
			<h1>Detail Dentist {dent.id} </h1>
			<p>{dent.name}</p>
			{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
			{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
		</>
	);
};

export default Detail;
