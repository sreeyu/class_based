import React, { useState } from "react";
import styles from './Users.module.css';
import User from "./User";

const DUMMY_USERS = [
    {id: 'u1', name: 'Shay'},
    {id: 'u2', name: 'Robin'},
    {id: 'u3', name: 'Ray'}
];

function Users(){

    const [showUsers, setShowUsers] = useState(false);

    const getUsers = () => {
        setShowUsers(prevState => !prevState)
    }

    const userList =   <ul>
    {DUMMY_USERS.map(user => 
        <User key={user.id} name={user.name} />
        )}
</ul>

    return(
        <div className={styles.users} >
            <button onClick={getUsers} >
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
          {showUsers && userList}
        </div>
    );
};

export default Users;