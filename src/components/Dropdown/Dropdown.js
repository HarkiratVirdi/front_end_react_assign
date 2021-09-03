import React, { useEffect, useState } from "react";
import ArrowDown from "../../assets/arrowdown.jpg";
const Dropdown = ({ list, type, handleClientChange, currentClient }) => {
  const [open, setopen] = useState(false);
  const onClick = () => setopen(!open);

  return (
    <div className="dropdown">
      <button onClick={onClick} className="dropdown-trigger">
        {currentClient ? (
          <span>{currentClient[0].client}</span>
        ) : (
          <span>All {type}</span>
        )}
        <img src={ArrowDown} alt="arrowDown" />
      </button>
      <div className={`menu ${open ? "show" : "hide"}`}>
        {list.map((e) => (
          <button
            onClick={(e) => {
              handleClientChange(e);
              setopen(!open);
            }}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
