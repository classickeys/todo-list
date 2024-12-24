import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "Your Todo List is Empty :)"}
        {todos.map((todo) => {
          return <TodoItem 
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          />;
        })}
      </ul>
    </>
  );
}

export default TodoList