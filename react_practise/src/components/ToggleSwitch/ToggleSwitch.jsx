import React, { useState } from "react";
import "../ToggleSwitch/ToggleSwitch.css";

const ToggleSwitch = () => {
  const [IsOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!IsOn);
  };

  return (
    <div
      className="toggle-switch"
      onClick={handleToggleSwitch}
      style={{ backgroundColor: IsOn ? "green" : "" }}
    >
      <div className={`switch ${IsOn ? "ON" : "OFF"}`}>
        <span className="switch-state">{IsOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};
export default ToggleSwitch;
