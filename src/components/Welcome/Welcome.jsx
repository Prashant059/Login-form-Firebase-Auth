import React from "react";
import { logOut } from '../../firebase';

const Welcome = ({ user, setUser }) => {
  const handleSignOut = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-500">
      <div className="p-4 rounded-lg shadow-lg text-center bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="text-lg"> 
            <>
              <span>Hello, {user.displayName}</span>
              <br />
              <button
                onClick={handleSignOut}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
