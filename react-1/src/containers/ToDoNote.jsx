import '../css/ToDoNote.css'
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import '../css/List.css'
import { useState } from "react";

function ToDoNote({ noteInfos, removeToDo, list }) {

    const { id, content } = noteInfos;
    let [editBool, setEditBool] = useState(false);
    let [inputValue, setInputValue] = useState(content);

    const removeNoteById = () => {
        removeToDo(id);
    }

    const editNoteById = () => {
        setEditBool(!editBool)
    }

    return (
        <div className="todo-note">
            <input type="text" className={`text ${editBool && "text-width"}`} value={inputValue} disabled={editBool ? false : true} onChange={(e) => setInputValue(e.target.value)} />
            <div className={`buttons ${editBool && "buttons-width"}`}>
                <button style={{ display: editBool ? "none" : "flex" }} className="event-button fa-pencil" onClick={editNoteById}>
                    <FaPencil size={12} />
                </button>
                <button className="event-button fa-trash" onClick={removeNoteById}>
                    <FaTrash size={12} />
                </button>
                {
                    editBool && (
                        <>
                            <button className="event-button-edit ci-circle-check" style={{ backgroundColor: 'green' }} onClick={() => {
                                setEditBool(false);
                                
                            }}>
                                <CiCircleCheck size={36} />
                            </button>
                            <button className="event-button-edit ci-circle-remove" style={{ backgroundColor: 'red' }} onClick={() => {
                                setEditBool(false);
                                setInputValue(content)
                            }}>
                                <CiCircleRemove size={36} />
                            </button>
                        </>
                    )
                }
            </div >
        </div>
    )
}

export default ToDoNote