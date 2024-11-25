

"use client"

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function todoUsers() {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    // Dispatch AddUser action and reset input field
    const userDispatch = () => {
        dispatch(addTodos(name));


        // Save the updated list of users to localStorage
        const currentTodos = JSON.parse(localStorage.getItem("todos")) || [];
        currentTodos.push({ id: new Date().getTime(), name }); // Add the new user with a unique ID
        localStorage.setItem("todos", JSON.stringify(currentTodos)); // Save users to localStorage
    };



    return (
        <div className="flex flex-col w-full h-52 border-2 p-5 ">
            <h3 className="text-4xl">Add Todo : </h3>
            <div className="flex justify-center flex-col  w-96  bg-black">
                <input
                    className="h-14 text-black p-3 rounded"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enten todo name"
                    required
                />
                <button onClick={userDispatch} className="border-2 h-14 text-xl mt-2 bg-slate-600 hover:bg-slate-800 rounded">Add Todo</button>
                <Link className="underline text-blue-600" href={"/removeTodo"}>Remove todo List</Link>
            </div>
        </div>
    )
}