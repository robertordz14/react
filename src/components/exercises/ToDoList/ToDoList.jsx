import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task && !items.find((item) => item.task === task)) {
      setItems((prevItems) => [
        ...prevItems,
        {
          task,
          completed: false,
        },
      ]);
    }
  };

  const handleDelete = (taskToDelete) => () => {
    setItems((prevItems) => [
      ...prevItems.filter((item) => item.task !== taskToDelete),
    ]);
  };

  const handleEdit = (taskToEdit) => () => {
    setItems((prevItems) => {
      const itemToUEdit = {
        ...prevItems.find((item) => item.task === taskToEdit),
        task,
      };
      return [
        ...prevItems.filter((item) => item.task !== taskToEdit),
        itemToUEdit,
      ];
    });
  };

  const handleComplete = (taskToComplete) => () => {
    setItems((prevItems) => {
      const itemToUpdate = {
        ...prevItems.find((item) => item.task === taskToComplete),
        completed: true,
      };
      return [
        ...prevItems.filter((item) => item.task !== taskToComplete),
        itemToUpdate,
      ];
    });
  };
  const handleNoComplete = (taskToComplete) => () => {
    setItems((prevItems) => {
      const itemToUpdate = {
        ...prevItems.find((item) => item.task === taskToComplete),
        completed: false,
      };
      return [
        ...prevItems.filter((item) => item.task !== taskToComplete),
        itemToUpdate,
      ];
    });
  };

  return (
    <div>
      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.task} className="Task">
            <span className={item.completed ? "Task-done" : "Task-false"}>
              {item.task}
            </span>
            <div>
              <button className="BtnList" onClick={handleDelete(item.task)}>Delete</button>
              <button className="BtnList" onClick={handleEdit(item.task)}>Edit</button>
              <button className="BtnList" onClick={handleComplete(item.task)}>Complete</button>
              <button className="BtnList" onClick={handleNoComplete(item.task)}>No complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
