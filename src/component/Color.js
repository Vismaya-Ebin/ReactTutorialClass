import { useState } from "react";

export function AddColor({ clr }) {
  const styles = {
    width: "500px",
    height: "50px",
    marginTop: "10px",
    background: clr,
  };
  return (
    <div style={styles}>
      <h3>{clr}</h3>
    </div>
  );
}

export function ColorBox() {
  // const colorList = ["orange", "blue", "green", "yellow"];
  const [colorList, updatedColorList] = useState( ["orange", "blue", "green", "yellow"]);
  const [intialColor, changedColor] = useState("White");
  const styles = {
    background: intialColor,
    fontSize: "18px",
  };

  return (
    <div>
      <input
        placeholder="Enter the color"
        style={styles}
        onChange={(e) => {
          changedColor(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          updatedColorList([...colorList,intialColor]);
        }}
      >
        Add Color
      </button>
      {colorList.map((color) => (
        <AddColor clr={color} />
      ))}
    </div>
  );
}
