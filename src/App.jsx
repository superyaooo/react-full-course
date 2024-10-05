import { useState, useEffect } from "react";

export default function App() {
	const [counter, setCounter] = useState(0);
	const [sync, setSync] = useState(false);

	useEffect(() => {
		document.title = "React Tutorial ";
	}, [sync]);

	useEffect(() => {
		const controller = new AbortController();
		
		async function fetchUsers() {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/users',
					{signal: controller.signal}
				);
				const json = await response.json();
				console.log(json);
			} catch (err) {
				console.log(err);
			}
		}
		fetchUsers();
		return () => {
			controller.abort();
		}
	});  

    return (
		<div>
			<div>You clicked the button {counter} times.</div>
			<button onClick={() => setCounter((counter) => counter + 1)}>Click Me</button>
			<button onClick={() => setSync((current) => !current)}>Sync</button>
		</div>
	);
}
