import React from 'react';
import UsersContext from './components/users-context';
import UserFinder from './components/userList/UserFinder';


function App() {
  return (
    <UsersContext.Provider >
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
