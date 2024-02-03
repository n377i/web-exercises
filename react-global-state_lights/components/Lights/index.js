import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {/* Render the lights dynamically based on the array in state */}
      {lights.map(({ id, name, isOn }) => (
        <li key={id}>
          {/* Pass down `onToggle` prop using an inline function to pass in the `id` of the light */}
          <Light name={name} isOn={isOn} onToggle={() => toggleLight(id)} />
        </li>
      ))}
    </StyledLights>
  );
}
