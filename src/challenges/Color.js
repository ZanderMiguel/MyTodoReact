import React from "react";

const Color = ({ color, colorValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Type Color"
        onChange={(e) => colorValue(e.target.value)}
      />
    </>
  );
};

export default Color;
