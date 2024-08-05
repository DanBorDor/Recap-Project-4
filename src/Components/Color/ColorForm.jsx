/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-enable no-unused-vars */
import { nanoid } from "nanoid";
import ColorInput from "./ColorInput";

function ColorForm({ onAddColor }) {
  const [role, setRole] = useState("Primary");
  const [hex, setHex] = useState("#000000");
  const [contrastText, setContrastText] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };
    onAddColor(newColor);
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
      <button type="submit">Add Color</button>
    </form>
  );
}

export default ColorForm;
