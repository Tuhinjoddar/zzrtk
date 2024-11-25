

"use client"

import { useState } from "react"
import { AddUser } from "../redux/slice"
import { useDispatch } from "react-redux"
import Link from "next/link";
export default function AddUsers() {

    const [name, setName] = useState("");
    const dispatch = useDispatch();



    // Dispatch AddUser action and reset input field
    const userDispatch = () => {
        dispatch(AddUser(name));


        // Save the updated list of users to localStorage
        const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
        currentUsers.push({ id: new Date().getTime(), name }); // Add the new user with a unique ID
        localStorage.setItem("users", JSON.stringify(currentUsers)); // Save users to localStorage
    };


    return (
        <div className="flex flex-col w-full h-52 border-2 p-5 ">
            <h3 className="text-4xl">Add User : </h3>
            <div className="flex justify-center flex-col  w-96  bg-black">
                <input
                    className="h-14 text-black p-3 rounded"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enten your name"
                    required
                />
                <button onClick={userDispatch} className="border-2 h-14 text-xl mt-2 bg-slate-600 hover:bg-slate-800 rounded">Add User</button>
                <div className=" flex flex-row">
                    <Link className="underline text-blue-600" href={"/removeUser"}>Remove User</Link>
                    <Link className="underline ml-5 text-blue-600" href={"/todoList"}>Go to todo page</Link>
                    <Link className="underline ml-5 text-blue-600" href={"/apiCalled"}>Go to API page</Link>

                </div>

            </div>
        </div>
    )
}