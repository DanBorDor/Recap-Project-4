import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.length === 0 && (
        <p className="color-card-highlight">
          No colors here. Click buttons to start paint by numbers
        </p>
      )}
      {colors.map((color) => (
        <Color key={color.id} color={color} onDelete={handleDeleteColor} />
      ))}
    </>
  );
}

export default App;
