import React, { useState, Component } from "react";
import styles from './Users.module.css';
import User from "./User";

class Users extends Component{
    
    constructor(){
        super();
        this.state = {
            showUsers: false
        };
    }

    getUsers(){
        this.setState((prevState) => {
            return {showUsers: !prevState.showUsers}
        })
    }

    render(){

        

        const userList =   <ul>
        {this.props.users.map(user => 
            <User key={user.id} name={user.name} />
            )}
    </ul>

        return(
            <div className={styles.users} >
                <button onClick={this.getUsers.bind(this)} >
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
              {this.state.showUsers && userList}
            </div>
        );
    }
}



// function Users(){

//     const [showUsers, setShowUsers] = useState(false);

//     const getUsers = () => {
//         setShowUsers(prevState => !prevState)
//     }

   

//     return(
//         <div className={styles.users} >
//             <button onClick={getUsers} >
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//           {showUsers && userList}
//         </div>
//     );
// };

export default Users;