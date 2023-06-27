import React from "react";
import styles from './User.module.css';

function User(props){
    return (
        <li className={styles.user}>{props.name}</li>
    );
};

export default User;