import React from 'react';
import TodoList from './Todo/TodoList.jsx';
import Context from './context';
import AddTodo from './Todo/AddTodo.jsx';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Сходити в тренажерний' },
    { id: 2, completed: false, title: 'Купити ялинку' },
    { id: 3, completed: false, title: 'Зайти в магазин' }
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function addItem(item) {
    setTodos(todos.concat([
      {
        title: item,
        id: Date.now(),
        completed: false
      }
    ]));
  }

  function removeTodo(id) {
    let remove = confirm("Delete item?"); //eslint-disable-line
    if (remove) {
      setTodos(todos.filter(todo => todo.id !== id));
    } else {
      return
    }
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <AddTodo onCreate={addItem}/>
        
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>There are no items in the list!</p>
        )}
      </div>
    </Context.Provider>
  )   
}

export default App;
