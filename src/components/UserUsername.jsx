import React from "react";

export function UserUsername(props) {
    return (
        // <React.Fragment> </React.Fragment>
        // <> fragment shorthand
        <>
            <b>Username:</b>
            <span>{props.username}</span>
            <br/>
        </>
    );
}