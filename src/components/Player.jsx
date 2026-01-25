import React from "react";

export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="players-name">{name}</span>
        <span className="players-symbol"> {symbol}</span>
      </span>
      <button>EDIT</button>
    </li>
  );
}
