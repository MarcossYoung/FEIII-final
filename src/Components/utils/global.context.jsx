import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';
const ContextGlobal = createContext();

const Context = ({children}) => {
	const [data, setData] = useState([]);
	const [theme, setTheme] = useState('light');

	const url = 'https://jsonplaceholder.typicode.com/users';
	useEffect(() => {
		axios(url).then((res) => setData(res.data));
	}, []);

	return (
		<ContextGlobal.Provider value={{data, theme, setTheme}}>
			{children}
		</ContextGlobal.Provider>
	);
};

export default Context;

export const useGlobalStates = () => {
	return useContext(ContextGlobal);
};
