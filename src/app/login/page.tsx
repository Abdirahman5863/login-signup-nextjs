"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen py-2 mt-1 bg-purple-400">
      <h1 className="text-blue-500   font-extrabold text-2xl  ">Login</h1>
      <hr />

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
        onClick={onLogin}
        className="px-1 border border-gray-300 rounded-lg mb-4 focus:outline-none
       focus:border-gray-600  mt-2 bg-green-600"
      >
        Login Now
      </button>
    </div>
  );
};

export default login;
