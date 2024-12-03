import React, { useState } from "react";
import { editTodo } from "../features/todo/todoSlice"; 
import { useDispatch } from "react-redux";

function TodoItem({ id, closeModal }) {
    const [editedDescription, setEditedDescription] = useState('');
    const [editedText, setEditedText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            editTodo({
                id: id,
                description: editedDescription,
                text: editedText,
            })
        );
        closeModal();
    };

    return (
        <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Edit Todo</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-semibold">
                            Description:
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="mt-2 px-4 py-2 border rounded-lg w-full"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="text" className="block font-semibold">
                            Text:
                        </label>
                        <textarea
                            id="text"
                            className="mt-2 px-4 py-2 border rounded-lg w-full"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoItem;
