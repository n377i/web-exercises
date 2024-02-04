import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span role="img" aria-label="Happy face">
          🙂
        </span>
      ) : (
        <span role="img" aria-label="Sad face">
          ☹️
        </span>
      )}
    </div>
  );
}

export default function App() {
  return <Smiley isHappy />;
}
