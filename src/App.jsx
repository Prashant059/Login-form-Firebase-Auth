import React, { useState, useEffect } from 'react'
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in:', user);
        setUser(user);
      } else {
        console.log('No user is logged in');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? <Welcome user={user} setUser={setUser}/> : <Login setUser={setUser} />}
    </>
  )
}

export default App
