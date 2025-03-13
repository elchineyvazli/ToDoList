import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import '../css/List.css'
import { useState } from "react";

function ToDoNote({ noteInfos, removeToDo, editToDo, editBool, editValue }) {

    const { id, content } = noteInfos;

    const removeNoteById = () => {
        removeToDo(id);
    }

    const editNoteById = () => {
        editToDo(id);
        setEditBool(!editBool)
    }
    return (
        <div className="todo-note">
            <input type="text" id='text' value={content} disabled />
            <div className="buttons">
                <div className="buttons-inside">
                    <button className="event-button" onClick={editNoteById}>
                        <FaPencil size={12} />
                    </button>
                    <button className="event-button" onClick={removeNoteById}>
                        <FaTrash size={12} />
                    </button>
                </div>
                <div className={`accepting ${editBool && "open"} `}>
                    <CiCircleCheck size={20} />
                    <CiCircleRemove size={20} />
                </div>
            </div>
        </div>
    )
}

export default ToDoNote