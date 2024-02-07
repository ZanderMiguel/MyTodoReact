import React from "react";
import TodoForm from "../TodoList/TodoForm";
import { useState } from "react";

const Layout = () => {
  const [task, setTask] = useState("");

  return (
    <div>
      <TodoForm task={task} setTask={setTask} />
    </div>
  );
};

export default Layout;
