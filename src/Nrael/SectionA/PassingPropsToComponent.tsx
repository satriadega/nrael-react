import "./PassingPropsToComponent.css";

function PassingPropsToComponent({
  props1,
  props2,
}: {
  props1: { name: string; imageId: string };
  props2: number;
}) {
  return (
    <>
      <h1>This is way 1</h1>
      <p>
        This is props 1: {props1.name}, it's an object with an image ID:{" "}
        {props1.imageId}!
      </p>
      <p>This is props 2: {props2}, it's a number!</p>
    </>
  );
}

export default PassingPropsToComponent;

interface PassingProps {
  props1: string;
  props2?: number;
}

export function PassingPropsToComponentC2({
  props1,
  props2 = 0,
}: PassingProps) {
  return (
    <>
      <h1 style={{ marginTop: "8px" }}>This is way 2</h1>
      <p>This is props 1: {props1}, it's a string!</p>
      <p>This is props 2: {props2}, it's a number!</p>
    </>
  );
}

export function PassingPropsToComponentC3(props: PassingProps) {
  const { props1, props2 = 0 } = props;

  return (
    <>
      <h1 style={{ marginTop: "8px" }}>This is way 3</h1>
      <p>This is props 1: {props1}, it's a string!</p>
      <p>This is props 2: {props2}, it's a number!</p>
    </>
  );
}

// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }
