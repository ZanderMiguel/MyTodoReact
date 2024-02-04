import React from "react";

const ListItems = ({ items, handleChecked, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <div className="containder-input">
              <input
                type="checkbox"
                name={item.label}
                id={item.id}
                onChange={() => handleChecked(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChecked(item.id)}
              >
                {item.label}
              </label>
              <button onClick={() => handleDelete(item.id)}> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
