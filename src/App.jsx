import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [counter, setCounter] = useState(3);

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "fjka",
            email: "kjalj@fa.com"
        },
        {
            id: 2,
            username: "fadgag",
            email: "fafag@fa.com"
        },
    ]);

    return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				const newUser = {
					id: counter,
					username,
					email
				}
				setCounter((currCounter) => currCounter + 1);
				setUsers((currUsersState) => [...currUsersState, newUser]);
			}}>
				<div>
					<label htmlFor='username'>Username</label>
					<input name='username' id='username' value={username} onChange={(e) => {
						setUsername(e.target.value);
					}} />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' id='email' value={email} onChange={(e) => {
						setEmail(e.target.value);
					}} />
				</div>
				<button>Add User</button>
			</form>
			<br/>
			{users.map((user) => (
				<UserDetails key={user.id} user={user} setUsers={setUsers} />
			))}
		</div>
	);
}
