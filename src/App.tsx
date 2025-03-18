import "./App.css";
import ComponentExample from "./Nrael/SectionA/ComponentExample";
import JsxExample from "./Nrael/SectionA/JsxExample";
import MultipleComponentOnSameFile, {
  AnotherComponent,
} from "./Nrael/SectionA/MultipleComponentOnSameFile";

const stylingJsxExample: React.CSSProperties = {
  width: "max-content",
  backgroundColor: "blue",
  margin: "20px auto",
  textAlign: "center",
  padding: "10px",
};

function App() {
  return (
    <>
      <div>
        {/* SectionA */}
        {/* loading a component */}
        <ComponentExample />
        <MultipleComponentOnSameFile />
        <AnotherComponent />
        <div style={stylingJsxExample}>
          <h1 style={{ fontSize: "26px", color: "white" }}>JSX Example</h1>
          <JsxExample />
        </div>
        ;
      </div>
    </>
  );
}

export default App;
