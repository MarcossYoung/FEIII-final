import React from 'react';
import {useState} from 'react';

const Form = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`
      Nombre: ${user.name} 
      Email: ${user.email}
      `);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Nombre</label>
				<input
					type='text'
					name='name'
					onChange={(event) =>
						setUser({...user, name: event.target.value})
					}
				/>
				<label>Email</label>
				<input
					type='email'
					name='email'
					onChange={(event) =>
						setUser({...user, email: event.target.value})
					}
				/>

				<button type='submit'>Registrarse</button>
			</form>

			<h4>Gracias {user.name}!Ya te contactaremos via mail</h4>
		</>
	);
};

export default Form;
