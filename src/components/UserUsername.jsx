import React from "react";
import styles from "./styles.module.css";

export function UserUsername(props) {
    return (
        // <React.Fragment> </React.Fragment>
        // <> fragment shorthand
        <>
            <b style={{
                fontSize: "32px",
                color: "red"
            }}>Username:</b>
            <span className={styles.username}>{props.username}</span>
            <br/>
        </>
    );
}