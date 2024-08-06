/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-enable no-unused-vars */
import "./Color.css";
import DeleteConfirmation from "./DeleteConfirmation";

function Color({ color, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    onDelete(color.id);
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="color-card" style={{ backgroundColor: color.hex }}>
      <h2 className="color-card-headline">{color.role}</h2>
      <p>{color.hex}</p>
      <p style={{ color: color.contrastText }}>{color.contrastText}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      {showConfirm && (
        <DeleteConfirmation onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default Color;
