import PropTypes from "prop-types"

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){

    return (
        
        <li className="list-items">
          <label>
            <input className="todo-checkbox" checked={completed} type="checkbox" onChange={e=> toggleTodo(id, e.target.checked)}  /> {title}
          </label>
          <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
     
    )

}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
  
}


export default TodoItem