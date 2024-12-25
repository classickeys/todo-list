import { useEffect, useState } from "react";
import TopHeader from "./components/TopHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([]);

  //loading todos from sessionStorage, I want it to refresh when I close the broswer
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos) {
      setTodos(storedTodos)
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }  else {
      // If there are no todos, remove the item from localStorage
      localStorage.removeItem("todos");
    }
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => 
        todo.id !== id);
  });
    
  }

  return (
    <>
      <TopHeader />
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
