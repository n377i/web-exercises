import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

// Create array of objects with `name`, `isOn` and `id` property to represent state of lights
const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: true },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  // Create a function to toggle the `isOn` property of a light based on its `id`
  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  // Create handler functions to toggle all lights on and off
  const turnAllLightsOn = () => {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  };

  const turnAllLightsOff = () => {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  };

  // Create a value to display the count of turned on lights on the home page
  const lightsOnCount = lights.filter(({ isOn }) => isOn).length;

  return (
    // Set the `isDimmed` prop to `true` if all lights are turned off
    <Layout isDimmed={lightsOnCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        lightsOnCount={lightsOnCount}
        toggleLight={toggleLight}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </Layout>
  );
}
