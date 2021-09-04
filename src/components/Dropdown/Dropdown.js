import React, { useState } from "react";
import ArrowDown from "../../assets/arrowdown.jpg";
const Dropdown = ({
  list,
  type,
  handleClientChange,
  currentClient,
  handleDateChange,
}) => {
  const [open, setopen] = useState(false);
  const onClick = () => setopen(!open);

  const handleDateOrClient = (e) => {
    return handleClientChange ? handleClientChange(e) : handleDateChange(e);
  };

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
        {list.map((e, key) => (
          <button
            key={key}
            onClick={(e) => {
              handleDateOrClient(e);
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
