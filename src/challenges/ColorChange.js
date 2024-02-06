import React from "react";
import { useState } from "react";
import Shades from "./Shades";
import Color from "./Color";

const ColorChange = () => {
  const [color, colorValue] = useState("");

  return (
    <section>
      <Shades color={color} colorValue={colorValue} />
      <Color color={color} colorValue={colorValue} />
    </section>
  );
};

export default ColorChange;
