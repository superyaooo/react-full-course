import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";
import { PostContentButtons } from "./PostContentButtons";

export function PostContent() {
    const userContextData = useContext(UserContext);
    
    return (
        <div>
            {userContextData.email}
            <PostContentButtons/>
        </div>
    )
}