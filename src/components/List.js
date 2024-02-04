import React from "react";
import ListItems from "./ListItems";
const List = ({ items, handleChecked, handleDelete }) => {
  return (
    <div>
      {items.length ? (
        <ListItems
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        "There's no task for you"
      )}
    </div>
  );
};

export default List;
