import React from "react";
import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      label: "Item 1",
    },
    {
      id: 2,
      checked: false,
      label: "Item 2",
    },
    {
      id: 3,
      checked: false,
      label: "Item 3",
    },
  ]);

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              name={item.label}
              id={item.id}
              onChange={() => handleChecked(item.id)}
              checked={item.checked}
            />
            <label>{item.label}</label>
            <button onClick={() => handleDelete(item.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
