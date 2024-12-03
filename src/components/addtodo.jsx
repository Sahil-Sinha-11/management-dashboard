import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,removeTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [text, setText] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({text,description}));
        setText('');
        setDescription('');
    }


   

    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Add a Todo</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your todo"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                 <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your todo description"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
