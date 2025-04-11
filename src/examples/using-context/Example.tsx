/**
 * This file is an example of how to use the Context API.
 * With the context API, we can pass data through the component tree without having to pass props down manually at every level. (Prop Drilling)
 * - This is better than prop drilling because we can change the color to something else without changing the Frame component.
 */
import { createContext, useContext } from "react";

const ColorContext = createContext<string | undefined>(undefined);

type ExampleProps = {
  color: string;
};

export function ExampleWithContext({ color }: ExampleProps) {
  return (
    <ColorContext.Provider value={color}>
      <Frame />
    </ColorContext.Provider>
  );
}

function Frame() {
  return (
    <div>
      <Box />
    </div>
  );
}

function Box() {
  const color = useContext(ColorContext);
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
      The color is {color} in ExampleWithContext
    </div>
  );
}
