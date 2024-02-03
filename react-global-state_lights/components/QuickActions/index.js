import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// export default function QuickActions() {
export default function QuickActions({
  turnAllLightsOff,
  turnAllLightsOn,
  lightsOnCount,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff}
        // Make the `Button`s `disabled` if their action would not do anything
        disabled={lightsOnCount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnAllLightsOn}
        disabled={lightsOnCount === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
