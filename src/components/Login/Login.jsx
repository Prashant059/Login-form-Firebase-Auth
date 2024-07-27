import React from "react";
import { auth, provider, signInWithPopup } from "../../firebase";

const Login = ( {setUser} ) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user)
      console.log("User Info:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign In With
        </h2>
        <div className="flex justify-center mb-8">
          <button onClick={handleGoogleSignIn} className="bg-red-600 text-white rounded-lg px-4 py-2 w-max">
            Google
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-zinc-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot?
            </a>
          </div>
          <button className="bg-zinc-800 text-white rounded-lg px-4 py-2 w-full">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-zinc-600">
          Not a member?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
