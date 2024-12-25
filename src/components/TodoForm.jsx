import PropTypes from "prop-types";
import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onAddTodo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="form-row">
        <label htmlFor="item">New Task:</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a goal for your todo list..."
          type="text"
          name="item"
          id="item"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}


TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default TodoForm;
