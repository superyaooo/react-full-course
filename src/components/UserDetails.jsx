import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [useremail, setUserEmail] = useState(user.email);

    return (
        <div>
            <div>
                <button onClick={() => {
                    setIsEditing((currentState) => !currentState);
                }}>
                    Edit
                </button>
                <button onClick={() => {
                    setUsers((currUsersState) => currUsersState.filter(
                        (currUser) => currUser.id !== user.id
                    ));
                }}>
                    Delete
                </button>
                {isEditing && (
                    <button 
                        onClick={() => {
                            setUsers((currUsersState) => 
                                currUsersState.map((currUser) => 
                                    currUser.id === user.id 
                                        ? {...currUser, username: username, email: useremail}
                                        : currUser
                                    )
                                );
                            setIsEditing(false);
                        }}
                    >
                    Save
                </button>
                )}
            </div>
            <div>
                <b>ID: </b>
                <span>{user.id}</span>
                <br/>
                <b>Username: </b>
                    {isEditing ? (
                        <input name="username" id="username" value={username} 
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    ) : (
                        <span>{user.username}</span>
                    )}
                <br/>
                <b>Email: </b>
                    {isEditing ? (
                        <input name="email" id="email" value={useremail} 
                            onChange={(e) => {
                                setUserEmail(e.target.value);
                            }}
                        />
                    ) : (
                        <span>{user.email}</span>
                    )}
            </div>
        </div>
    );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    setUsers: PropTypes.func.isRequired
}