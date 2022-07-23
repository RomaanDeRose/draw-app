import { useState } from "react";
import { boxes } from "./utils/boxes";
import Box from "./components/Box";
import { colors } from "./utils/colors";
import "./App.css";

function App() {
  const [box, setBox] = useState(boxes);
  const [color, setColor] = useState("");
  const optionColor = colors;

  const click = (e) => {
    e.preventDefault();
    setBox(...box, { color: "bg-violet-400" });
  };

  const changeColor = (e) => {
    setColor(e.target.textContent);
  };

  console.log(box);

  return (
    <>
      <h1>dibuja!</h1>
      <ul className="w-full flex flex-wrap justify-center mb-3">
        {optionColor.map((color, i) => (
          <li
            key={i}
            className={`${color} text-center w-32 p-1 mx-1 my-2 rounded cursor-pointer`}
            onClick={changeColor}
          >
            {color}
          </li>
        ))}
      </ul>
      <div className="draw-container bg-white w-4/5 mx-auto shadow-lg border-4 border-gray-900 rounded-2xl grid">
        <Box box={box} setBox={setBox} color={color} onClick={click} />
      </div>
    </>
  );
}

export default App;
