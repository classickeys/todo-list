import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <h1 className="header">Your Tasks:</h1>
      <p>{todos.length === 0 && "Your Todo List is Empty :)"}</p>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <TodoItem
            
            key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // UUIDs are strings
      title: PropTypes.string.isRequired, // Todo title
      completed: PropTypes.bool.isRequired, // Completion status
    })
  ).isRequired, // `todos` is required
  toggleTodo: PropTypes.func.isRequired, // `toggleTodo` is a required function
  deleteTodo: PropTypes.func.isRequired, // `deleteTodo` is a required function
};

export default TodoList;
