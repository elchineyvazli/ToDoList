import { useState } from 'react';
import '../css/CreateTodo.css';
import { v4 as uuid } from 'uuid'

function CreateTodo({ create_func }) {
    const [content, setContent] = useState('');
    const createToDoLine = () => {
        if (!content) return
        const request = {
            id: uuid(),
            content: content
        }

        create_func(request)
    }

    return (
        <div className='todo-create'>
            <input type="text" onChange={(e) => setContent(e.target.value)} />
            <button className='create-button' onClick={createToDoLine}>Create!</button>
        </div>
    )
}

export default CreateTodo