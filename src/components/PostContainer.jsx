import { useContext, useState } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContainer() {
    const userContextData = useContext(UserContext);
    
    return (
        <div>
            <div>{userContextData.displayName}</div>
            <PostContent />
            
        </div>
    )
}