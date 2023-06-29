import React from 'react';
import UsersContext from './components/users-context';
import UserFinder from './components/userList/UserFinder';

const DUMMY_USERS = [
  {id: 'u1', name: 'Shay'},
  {id: 'u2', name: 'Robin'},
  {id: 'u3', name: 'Ray'}
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
