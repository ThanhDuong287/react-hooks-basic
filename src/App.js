import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import ToDoList from './components/ToDoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Marcelo Vieira is the skill man left back 💙' },
    { id: 2, title: 'Luka Modric is the best trivela ⚽' },
    { id: 3, title: 'Cristiano Ronaldo is the world class volley ⚽' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) { return; }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1> React hooks - TodoList</h1>
      <ToDoList todos={todoList} onToDoClick={handleTodoClick} />
    </div>
  );
}

export default App;
