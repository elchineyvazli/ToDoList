import { useState } from 'react';
import CreateTodo from './containers/CreateTodo';
import ListComponent from './containers/ListComponent';
import './css/App.css'

function App() {
  let [todoList, setToDoList] = useState([]);

  const createToDoLine = (toDoInfo) => {
    setToDoList(prev => [...prev, toDoInfo]);
  }

  const removeToDo = (itemId) => {
    setToDoList(prevValue => prevValue = prevValue.filter(item => item.id !== itemId))
  }

  const editToDo = (itemId, itemContent) => {
    todoList.forEach(el => {
      console.log(el);
      if (el.id == itemId) {
        el.content = itemContent;
      }
    })

  }

  return (
    <div className={`App open-App`}>
      <CreateTodo create_func={createToDoLine} />
      <ListComponent list={todoList} removeToDo={removeToDo} editToDo={editToDo} />
    </div>
  )
}

export default App