import { useState } from "react";

function TodoForm({ onAddTodo }){
    const [newItem, setNewItem] = useState("");
    
    function handleSubmit(e){
        e.preventDefault()
        if (newItem === "") return
     
        onAddTodo(newItem)
    
        setNewItem("")
      }


    return(
        <form onSubmit={handleSubmit} className="item-form">
        <div className="form-row">
          <label htmlFor="item">New Task:</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="add something that you would like to achieve"
            type="text"
            name="item"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}

export default TodoForm