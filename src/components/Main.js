import React from "react";
import { useState } from "react";

const Main = () => {
  const [name, setName] = useState("Zander");
  const [count, setCount] = useState(0);

  // const handleChangeName = () => {
  //   const name = ["Mark", "Zander", "Kerwin"];
  //   const ranNum = Math.floor(Math.random() * 3);

  //   setName(name[ranNum]);
  //   console.log(ranNum);
  // };

  // const handleClick = (name) => {
  //   console.log(name);
  // };

  return (
    <main>
      <p>
        Hello {name}! {count}
      </p>
      <ul></ul>

      {/* <button onClick={handleChangeName}>Click</button> */}
      {/* <button onClick={() => setCount(count + 1)}> Count</button> */}
    </main>
  );
};

export default Main;
