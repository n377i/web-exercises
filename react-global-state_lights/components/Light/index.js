// import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

// Add `isOn`, `name`, `onToggle` as props
export default function Light({ isOn, name, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
