import React from 'react'
import "../css/List.css"
import ToDoNote from './ToDoNote'


function ListComponent({ list, removeToDo, editToDo }) {
    return (
        <div className="list-component">
            {
                list.length > 0 ? (
                    list.map((el) => (
                        <ToDoNote key={el.id} noteInfos={el} removeToDo={removeToDo} editToDo={editToDo} />
                    ))
                ) :
                    <h3 style={{ textAlign: 'center', width: '100%' }}>There is not any draft</h3>
            }
        </div>
    )
}

export default ListComponent