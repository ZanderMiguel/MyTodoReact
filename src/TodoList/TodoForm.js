import React from "react";

const TodoForm = ({ task, setTask }) => {
  return (
    <form className="todolist">
      <label htmlFor="todolist">Add task</label>
      <input
        autoFocus
        type="text"
        id="todolist"
        placeholder="Add Task"
        required
      />
    </form>
  );
};

export default TodoForm;
