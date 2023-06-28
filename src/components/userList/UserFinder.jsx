import React, {Fragment, useEffect, useState} from "react";
import styles from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
    {id: 'u1', name: 'Shay'},
    {id: 'u2', name: 'Robin'},
    {id: 'u3', name: 'Ray'}
];

function UserFinder(){

    const [filteredUser, setFilteredUser] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUser(
            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
        );
    }, [searchTerm]);

    const getSearchTerm = (event) =>{
        setSearchTerm(event.target.value);
    }

    return(
        <Fragment>
            <div className={styles.finder} >
                <input type="search" onChange={getSearchTerm} />
            </div>
            <Users users={filteredUser} />
        </Fragment>
    );
};

export default UserFinder;