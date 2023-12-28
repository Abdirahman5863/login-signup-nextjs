"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen py-2 mt-1 bg-slate-700">
      <h1 className="text-green-500  font-san  font-extrabold text-lg font  ">
        Signup
      </h1>
      <hr />
      <label htmlFor="Username">Username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="px-1 borderr border-gray-300 rounded-2xl placeholder-black 
         mb-4 focus:outline-none focus:border-gray-500"
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="px-1 borderr border-gray-300 rounded-2xl placeholder-black 
         mb-4 focus:outline-none focus:border-gray-500"
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="px-1 borderr border-gray-300 rounded-2xl placeholder-black 
         mb-4 focus:outline-none focus:border-gray-500"
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="px-1 border border-gray-300 rounded-lg mb-4 focus:outline-none
       focus:border-gray-600  mt-2 bg-red-600"
      >
        Signup here
      </button>
      <Link href="/login" className="text-blue-500 font-serif font-semibold">
        Visit login page
      </Link>
    </div>
  );
};

export default signup;
