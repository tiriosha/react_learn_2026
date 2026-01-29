import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="players-name">{name}</span>
        ) : (
          <input
            type="text"
            value={name}
            required
            onChange={handleNameChange}
          />
        )}
        <span className="players-symbol"> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "EDIT" : "SAVE"}</button>
    </li>
  );
}
