import React from 'react'
import "../css/List.css"
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function ListComponent() {
    return (
        <div className='list-component'>
            <input type="text" id='text' disabled />
            <button>
                <FaPencil />
            </button>
            <button>
                <FaTrash />
            </button>
        </div>
    )
}

export default ListComponent