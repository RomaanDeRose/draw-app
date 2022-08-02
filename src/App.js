import { useState } from "react";
import html2canvas from "html2canvas";
import { boxes } from "./utils/boxes";
import Box from "./components/Box";
import { colors } from "./utils/colors";
import "./App.css";

function App() {
  const [box, setBox] = useState(boxes);
  const [color, setColor] = useState("");

  const changeColor = (e) => {
    setColor(e.target.classList[0]);
  };

  const download = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "draw.png";
      link.href = img;
      link.click();
    });
  };

  console.log(box);

  return (
    <>
      <h3 className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold text-lg w-56 p-3 my-2 mx-auto rounded-lg">
        color activo:
        {color !== "" ? (
          <span className={`inline-block ${color} w-10 h-6 rounded`}></span>
        ) : (
          <span className="font-medium text-sm">no hay color...</span>
        )}
      </h3>
      <ul className="bg-gray-500 w-4/5 mx-auto rounded-3xl flex flex-wrap justify-center mb-3">
        {colors.map((color, i) => (
          <li
            key={i}
            className={`${color} text-center w-14 h-12 p-1 mx-1 my-2 rounded-full cursor-pointer`}
            onClick={changeColor}
          ></li>
        ))}
      </ul>
      <div
        id="capture"
        className={`draw-container bg-white w-4/5 mx-auto border-4 border-gray-900 rounded-md grid`}
      >
        <Box boxes={box} box={setBox} color={color} />
      </div>
      <button
        className="uppercase font-bold bg-gradient-to-r from-sky-400 to-violet-400 text-white p-3 my-2 rounded-xl transition-all active:scale-95"
        onClick={download}
      >
        descargar
      </button>
    </>
  );
}

export default App;
