import { useState, useEffect } from "react";

export const HookOne = () => {
  const [color, setColor] = useState("");

  const generateRandomColor = () => {
    let color = "#"; // Initialize with '#' to represent a hex color code
    for (let index = 0; index < 3; index++) {
      let colorPart = Math.floor(Math.random() * 256).toString(16);
      // Ensure that each part is two characters long (e.g., '0a' instead of 'a')
      color += colorPart.padStart(2, "0");
    }
    console.log(color);
    return color;
  };

  const colorHandler = () => {
    const newColor = generateRandomColor();
    setColor(newColor); // Update state with the new color
  };

  useEffect(() => {
    const initialColor = generateRandomColor();
    setColor(initialColor); // Set the initial color when the component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={colorHandler}>Change Background Color</button>
    </div>
  );
};
