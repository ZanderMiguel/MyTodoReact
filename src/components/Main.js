import React from "react";
import { useState } from "react";
import List from "./List";
import AddingForm from "./AddingForm";
import Searchbox from "./Searchbox";

const Main = () => {
  // Adding form
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopppinglist"))
  );
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shopppinglist", JSON.stringify(newItems));
  };

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

  const handleSubmit = (e) => {
    console.log(newItem);
    e.preventDefault();
    if (!newItem) return;
    // clear search
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newitem = { id, checked: false, label: newItem };
    const listItem = [...items, newitem];
    setAndSaveItems(listItem);
    setNewItem("");
  };
  console.log(localStorage.getItem("shopppinglist"));
  return (
    <main>
      <AddingForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchbox search={search} setSearch={setSearch} />
      <List
        items={items.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase())
        )}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Main;
