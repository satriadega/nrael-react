import "./ComponentExample.css";

function MultipleComponentOnSameFile() {
  return (
    <div
      style={{
        backgroundColor: "chocolate",
        width: "fit-content",
        margin: "0 auto",
        padding: "8px",
        borderRadius: "6px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>This is the Parent Component</h1>
      <AnotherComponent />
      <AnotherComponent />
    </div>
  );
}

function AnotherComponent() {
  return (
    <>
      <div className="component-example">
        <p>Hi this is a Component!</p>
      </div>
    </>
  );
}
export default MultipleComponentOnSameFile;
