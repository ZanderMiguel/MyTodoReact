import React from "react";
import { useState } from "react";
import List from "./List";

const Main = () => {
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
    localStorage.setItem("shopppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      <List
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Main;
