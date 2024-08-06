import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("themeColors", {
    defaultValue: initialColors,
  });

  useEffect(() => {
    // Überprüfen, ob colors leer ist und dann initialColors setzen, falls nötig
    if (colors.length === 0) {
      setColors(initialColors);
    }
  }, [colors, setColors]);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const handleEditColor = (updatedColor) => {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
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
        <Color
          key={color.id}
          color={color}
          onDelete={handleDeleteColor}
          onEdit={handleEditColor}
        />
      ))}
    </>
  );
}

export default App;
