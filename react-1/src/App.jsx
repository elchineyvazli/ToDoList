import { useState } from 'react';
import CreateTodo from './containers/CreateTodo';
import ListComponent from './containers/ListComponent';
import './css/App.css'

function App() {
  let [todoList, setToDoList] = useState([]);
  let [editBool, setEditBool] = useState(false);

  const createToDoLine = (toDoInfo) => {
    setToDoList(prev => [...prev, toDoInfo]);
  }

  const removeToDo = (itemId) => {
    setToDoList(prevValue => prevValue = prevValue.filter(item => item.id !== itemId))
  }

  const editToDo = (itemId) => {
    const id = todoList.filter(item => item.id === itemId)[0].id;
    const content = todoList.filter(item => item.id === itemId)[0].content;
    console.log(content);
    // setToDoList(prevList => {
    //   prevList.forEach(obj => {
    //     (obj.id == id) && (
    //       obj.content = content
    //     )
    //   })
    // })
  }

  return (
    <div className={`App open-App`}>
      <CreateTodo create_func={createToDoLine} />
      <ListComponent list={todoList} removeToDo={removeToDo} editToDo={editToDo} editValue={editBool} />
    </div>
  )
}

export default App