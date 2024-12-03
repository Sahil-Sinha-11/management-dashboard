import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    console.log(todos);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Your Todos</h2>
            
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
                    >
                        <span className="text-lg text-gray-800">{todo.text}</span>
                        <span className="text-lg text-gray-800">{todo.description}</span>
                        
                        <button
                            className="ml-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
