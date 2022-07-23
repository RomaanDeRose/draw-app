import React, { useState } from "react";

function Box({ box, setBox, color }) {
  const changeColor = (e, index) => {
    e.preventDefault();
    if (box.map((b) => b.value).includes(index)) {
      const oneBox = box.map((b) => {
        if (b.value === index) {
          console.log("bokee");
          return {
            ...b,
            color: color,
          };
        }
        return b;
      });
      setBox(oneBox);
    }
  };

  return (
    <>
      {box.map((b, i) => (
        <div
          key={b.value}
          className={`${b.color} border border-gray-200 w-full h-8`}
          onClick={(e) => changeColor(e, i)}
        ></div>
      ))}
    </>
  );
}

export default Box;
