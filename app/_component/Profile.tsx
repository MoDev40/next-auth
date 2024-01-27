'use client'

import React from 'react';
import {signOut} from "next-auth/react"
interface User {
    name:string | undefined;
    email:string | undefined;
    image:string | undefined;
}
const Profile = ({user} : { user : User | any}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-56 p-4">
          <img
            className="w-full h-full object-cover object-center"
            src={user?.image}
            alt="Profile"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user?.name}</h2>
          <p className="text-gray-600 mb-4">{user?.email}</p>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-blue">
            </button>
            <button onClick={async()=>{ await signOut()}} className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-red">
                Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
