import React, { Fragment, useEffect, useState, Component } from "react";
import styles from './UserFinder.module.css';
import UsersContext from "../users-context";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";


class UserFinder extends Component{

    static contextType = UsersContext;

    constructor(){
        super();
        this.state = {
            filteredUser: [],
            searchTerm: ''
        };
    };

    componentDidMount(){
        this.setState({filteredUser: this.context.users})
    }

    getSearchTerm(event){
        this.setState({
            searchTerm: event.target.value
        });
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUser: this.context.users.filter((user) => 
                user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            });
        };
    }

    render(){
        return(
        <Fragment>
            <div className={styles.finder} >
                <input type="search" onChange={this.getSearchTerm.bind(this)} />
            </div>
            <ErrorBoundary >
                <Users users={this.state.filteredUser} />
            </ErrorBoundary>
        </Fragment>
    );
    }
}

// function UserFinder(){

//     const [filteredUser, setFilteredUser] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUser(
//             DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
//         );
//     }, [searchTerm]);

//     const getSearchTerm = (event) =>{
//         setSearchTerm(event.target.value);
//     }

//     return(
//         <Fragment>
//             <div className={styles.finder} >
//                 <input type="search" onChange={getSearchTerm} />
//             </div>
//             <Users users={filteredUser} />
//         </Fragment>
//     );
// };

export default UserFinder;