/**
 * This example shows how to use a composition pattern to pass a component as a prop.
 * This is useful when you want to pass a component as a prop to a parent component.
 * - This is better than prop drilling because we can change the color to something else without changing the Frame component.
 * - This is easier to test because we can pass a different component to the Frame component.
 */

type ExampleProps = {
  color: string;
};

export function ExampleWithComposition({ color }: ExampleProps) {
  return <Frame boxComponent={<Box color={color} />} />;
}

type FrameProps = {
  boxComponent: React.ReactNode;
};

function Frame({ boxComponent }: FrameProps) {
  return <div>{boxComponent}</div>;
}

function Box({ color }: { color: string }) {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
      The color is {color} in ExampleWithComposition
    </div>
  );
}
