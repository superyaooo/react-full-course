import { useState } from "react";

export function RegisterForm() {
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        displayName: ""
    });

    return <form>
        <div>
            <babel htmlFor="username">Username</babel>
            <input id="username" value={formFields.username} onChange={(e) => {
                setFormFields((currentState) => ({
                    ...currentState, 
                    username: e.target.value
                }));
            }}/>
        </div>        
        <div>
            <babel htmlFor="password">Password</babel>
            <input id="password" value={formFields.password} onChange={(e) => {
                setFormFields((currentState) => ({
                    ...currentState,
                    password: e.target.value
                }));
            }}/>
        </div>        
        <div>
            <babel htmlFor="displayName">Display Name</babel>
            <input id="displayName" value={formFields.displayName} onChange={(e) => {
                setFormFields((currentState) => ({
                    ...currentState,
                    displayName: e.target.value
                }));
            }}/>
        </div>
    </form>
}