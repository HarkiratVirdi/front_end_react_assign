import React, { useState } from "react";
import ArrowDown from "../../assets/arrowdown.jpg";
const Dropdown = ({ list, type }) => {
  const [open, setopen] = useState(false);
  const onClick = () => setopen(!open);

  return (
    <div className="dropdown">
      <button onClick={onClick} className="dropdown-trigger">
        <span>All {type}</span>
        <img src={ArrowDown} alt="arrowDown" />
      </button>
      <div className={`menu ${open ? "show" : "hide"}`}>
        {list.map((e) => (
          <button>{e}</button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
