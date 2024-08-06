/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-enable no-unused-vars */
import "./Color.css";
import DeleteConfirmation from "./DeleteConfirmation";
import ColorForm from "./ColorForm";

function Color({ color, onDelete, onEdit }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (updatedColor) => {
    onEdit(updatedColor);
    setIsEditing(false);
  };

  return (
    <div className="color-card" style={{ backgroundColor: color.hex }}>
      {isEditing ? (
        <>
          <ColorForm
            initialRole={color.role}
            initialHex={color.hex}
            initialContrastText={color.contrastText}
            onSubmit={(updatedColor) =>
              handleSaveEdit({ ...updatedColor, id: color.id })
            }
          />
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <h2 className="color-card-headline">{color.role}</h2>
          <p>{color.hex}</p>
          <p style={{ color: color.contrastText }}>{color.contrastText}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
      {showConfirm && (
        <DeleteConfirmation onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default Color;
