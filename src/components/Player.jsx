import { useState } from "react";

export const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setisEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleClick = () => {
    setisEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, editedName);
    }
  };

  function eventChange(event) {
    setEditedName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            required
            onChange={eventChange}
          />
        ) : (
          <span className="player-name">{editedName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleClick()}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
};
