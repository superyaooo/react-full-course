export function LoginForm() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label htmlFor="username">Username</label>
            <br/>
            <input 
                id="username" 
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input id="password" type="password" 
                onChange={(e) => {
                    console.log(`password: ${e.target.value}`);
                }}
            />
            <br/>
            <button>Login</button>
        </form>
    );
}