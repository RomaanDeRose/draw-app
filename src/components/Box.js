import React from "react";

function Box({ boxes, box, color }) {
  const changeColor = (e, index) => {
    e.preventDefault();
    if (boxes.map((b) => b.value).includes(index)) {
      const oneBox = boxes.map((b) => {
        if (b.value === index) {
          return {
            ...b,
            color: color,
          };
        }
        return b;
      });
      box(oneBox);
    }
  };

  return (
    <>
      {boxes.map((b, i) => (
        <div
          key={b.value}
          className={`${b.color} border border-gray-100 w-full h-8 cursor-crosshair hover:shadow-inner`}
          onClick={(e) => changeColor(e, i)}
        ></div>
      ))}
    </>
  );
}

export default Box;
