import React from "react";

const Shades = ({ color, colorValue }) => {
  return (
    <section>
      <div
        style={{
          margin: "1rem auto",
          backgroundColor: color,
          height: "10rem",
          maxWidth: "10rem",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {color}
      </div>
    </section>
  );
};

export default Shades;
