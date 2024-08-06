/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import "./DeleteConfirmation.css";

function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this color?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
}

export default DeleteConfirmation;
