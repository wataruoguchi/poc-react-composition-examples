/**
 * This file is an example of how to use prop drilling.
 * Prop drilling is the process of passing data through the component tree manually.
 * - This is not the best way. If we need to change the color to something else, we need to change the Frame component.
 */

type ExampleProps = {
  color: string;
};

export function ExampleWithPropDrilling({ color }: ExampleProps) {
  return (
    <div>
      <Frame color={color} />
    </div>
  );
}

function Frame({ color }: { color: string }) {
  /**
   * Frame does not care about the color, it just passes it to the Box component.
   */
  return (
    <div>
      <Box color={color} />
    </div>
  );
}

function Box({ color }: { color: string }) {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
      The color is {color} in ExampleWithPropDrilling
    </div>
  );
}
