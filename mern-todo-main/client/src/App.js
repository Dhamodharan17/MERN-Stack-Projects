import { useEffect, useState } from 'react';
const api_base = 'http://localhost:3001';

function App() {

	//creating array to get the response
	const [todos, setTodos] = useState([]);


	useEffect(() => {
		GetTodos();
	}, []);

	// method to load response in array
	const GetTodos = () => {
		fetch(api_base + '/todos')
			.then(res => res.json()) // getting json response
			.then(data => setTodos(data)) // storing in an array
			.catch((err) => console.error("Error: ", err));
	}

	return (
		<div>
			<h1>Customer Data</h1>

			<div >
			
				{todos.length > 0 ? todos.map(todo => (
					<div  key={todo._id} >
						<div>{todo.name}</div>
						<div >{todo.state}</div>
					</div>
				)) : (
					<p>You currently have no customer</p>
				)}
			</div>

		</div>
	);
}

export default App;
