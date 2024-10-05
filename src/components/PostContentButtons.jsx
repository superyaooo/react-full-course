import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContentButtons() {
    const {id, setUserData} = useContext(UserContext);

    return (
        <div>
            {id}
            <br/>
            <button onClick={() => {
                setUserData((currentState) => ({...currentState, displayName: "new name"}))
            }}>
                Click here
            </button>
        </div>
    );
}