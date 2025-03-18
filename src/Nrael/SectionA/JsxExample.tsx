import "./JsxExample.css";

// JSX is a syntax extension, or you can call it naming convention in react example className, not class using camelCase usually.,
// You can use JSX converter https://transform.tools/html-to-jsx

function JsxExample() {
  return (
    // <></> is not a JSX, its called react Fragment
    <>
      <h1 className="bgc-red">This is Red H1</h1>
      <h1 className="bgc-blue">This is Blue H1</h1>
      <h1 className="bgc-green">This is Green H1</h1>
    </>
  );
}

export default JsxExample;
