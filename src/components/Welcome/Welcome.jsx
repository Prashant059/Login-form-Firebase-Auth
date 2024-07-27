import React from "react";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Welcome = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); 
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    // <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-500">
    //   <div className="p-4 rounded-lg shadow-lg text-center bg-gradient-to-r from-blue-500 to-purple-500">
    //     <h1 className="text-2xl font-bold mb-4">Welcome</h1>
    //     <p className="text-lg">
    //       {user ? (
    //         <span>Hello, {user.email}</span>
    //       ) : (
    //         <span>Please log in.</span>
    //       )}
    //     </p>
    //   </div>
    // </div>

    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-500">
      <div className="p-4 rounded-lg shadow-lg text-center bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="text-lg">
          {user ? (
            <>
              <span>Hello, {user.email}</span>
              <br />
              <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <span>Please log in.</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
