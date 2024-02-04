import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  const buttonStyles = {
    color: color,
    backgroundColor: disabled ? "darkgrey" : "hotpink",
    fontSize: "2rem",
    padding: "1.5rem 3rem",
    border: "none",
    borderRadius: "50px",
    boxShadow: disabled ? "0 8px grey" : "0 8px mediumvioletred",
  };

  return (
    <button style={buttonStyles} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
    alert("You clicked me!");
  };

  return <Button color="white" text="Click me" onClick={handleClick} />;
}
