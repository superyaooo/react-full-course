import { useState, useEffect } from "react";

export default function App() {
	const [counter, setCounter] = useState(0);
	const [sync, setSync] = useState(false);

	useEffect(() => {
		document.title = "React Tutorial ";
	}, [sync]);

    return (
		<div>
			<div>You clicked the button {counter} times.</div>
			<button onClick={() => setCounter((counter) => counter + 1)}>Click Me</button>
			<button onClick={() => setSync((current) => !current)}>Sync</button>
		</div>
	);
}
