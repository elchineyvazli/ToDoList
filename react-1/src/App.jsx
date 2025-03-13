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

  return (
    <div className={`App open-App`}>
      <CreateTodo create_func={createToDoLine} />
      <ListComponent list={todoList} removeToDo={removeToDo} />
    </div>
  )
}

export default App