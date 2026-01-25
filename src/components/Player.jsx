import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="players-name">{name}</span>
        ) : (
          <input type="text" defaultValue={name} required />
        )}
        <span className="players-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>EDIT</button>
    </li>
  );
}
