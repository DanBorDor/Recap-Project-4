/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-enable no-unused-vars */
import { nanoid } from "nanoid";
import ColorInput from "./ColorInput";

function ColorForm({
  onAddColor,
  initialRole = "Please Enter Color Title",
  initialHex = "#000000",
  initialContrastText = "#ffffff",
  onSubmit,
}) {
  const [role, setRole] = useState(initialRole);
  const [hex, setHex] = useState(initialHex);
  const [contrastText, setContrastText] = useState(initialContrastText);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };
    if (onAddColor) {
      onAddColor(newColor);
    } else if (onSubmit) {
      onSubmit({ role, hex, contrastText });
    }
    setRole("");
    setHex("#000000");
    setContrastText("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div>
        <label>Hex:</label>
        <ColorInput value={hex} onChange={setHex} />
      </div>
      <div>
        <label>Contrast Text:</label>
        <ColorInput value={contrastText} onChange={setContrastText} />
      </div>
      <button type="submit">{onAddColor ? "Add Color" : "Save Changes"}</button>
    </form>
  );
}

export default ColorForm;
