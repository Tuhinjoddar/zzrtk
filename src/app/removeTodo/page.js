


"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos, setTodos } from "../redux/todoSlice";

export default function Page() {
    const todoData = useSelector((state) => state.todoname.todos);
    const dispatch = useDispatch();

    // Load users from localStorage when the component mounts
    useEffect(() => {

        const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
        dispatch(setTodos(todosFromLocalStorage)); // Set users in Redux state

    }, [dispatch]);


    // Handle removing user
    const handleRemoveTodo = (id) => {
        // Remove user from Redux
        dispatch(removeTodos(id));

        // Remove user from localStorage
        const updatedTodos = todoData.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
    };

    return (
        <div className="flex flex-col mt-3 w-full h-[760px] border-2">
            <header className="w-full bg-slate-600">
                <h3 className="text-4xl p-5">Todo Management</h3>
            </header>
            <div className="overflow-scroll h-full flex flex-col">
                {todoData.length === 0 ? (
                    <p className="text-center text-xl">No todos available.</p>
                ) : (
                    todoData.map((todo) => (
                        <div key={todo.id} className="ml-10 inline-flex my-2">
                            <div className="p-2 max-w-lg rounded-lg bg-green-950">
                                {todo.name}
                                <button
                                    onClick={() => handleRemoveTodo(todo.id)}
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
