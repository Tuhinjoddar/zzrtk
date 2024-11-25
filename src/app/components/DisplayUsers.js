"use client"

import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUsers } from "../redux/slice";
import { useEffect } from "react";

export default function DisplayUser() {
    const userData = useSelector((state) => state.username.users);
    const dispatch = useDispatch();


    // Load users from localStorage when the component mounts
    useEffect(() => {
        //  if (typeof window !== "undefined") {
        const usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
        dispatch(setUsers(usersFromLocalStorage)); // Set users in Redux state
        // }
    }, [dispatch]);


    // Handle removing user
    const handleRemoveUser = (id) => {
        // Remove user from Redux
        dispatch(removeUser(id));

        // Remove user from localStorage
        const updatedUsers = userData.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage
    };

    return (
        <div className="flex flex-col mt-3 w-full h-[550px] border-2">
            <header className="w-full bg-slate-600">
                <h3 className="text-4xl p-5">User List:</h3>
            </header>
            <div className="overflow-scroll h-full flex flex-col">
                {/* Show message if no users are available */}
                {userData.length === 0 ? (
                    <p className="text-center text-xl">No users available.</p>
                ) : (
                    userData.map((user) => (
                        <div key={user.id} className="ml-10 inline-flex my-2">
                            <div className="p-2 max-w-lg rounded-lg bg-green-950">
                                {user.name}
                                <button
                                    onClick={() => handleRemoveUser(user.id)}
                                    className="border rounded-lg ml-4 px-2 h-7 bg-slate-600 hover:bg-slate-800"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
