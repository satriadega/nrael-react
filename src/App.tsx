import "./App.css";
import ComponentExample from "./Nrael/SectionA/ComponentExample";
import ConditionalRendering from "./Nrael/SectionA/ConditionalRendering";
import JSXCurlyBraces from "./Nrael/SectionA/JSXCurlyBraces";
import JsxExample from "./Nrael/SectionA/JsxExample";
import MultipleComponentOnSameFile, {
  AnotherComponent,
} from "./Nrael/SectionA/MultipleComponentOnSameFile";
import PassingJSXToChildren from "./Nrael/SectionA/PassingJSXToChildren/PassingJSXToChildren";
import PassingPropsToComponent, {
  PassingPropsToComponentC2,
} from "./Nrael/SectionA/PassingPropsToComponent";
import RenderingLists, {
  FilteringLists,
} from "./Nrael/SectionA/RenderingLists";

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
        <JSXCurlyBraces />;
        <PassingPropsToComponent
          props1={{ imageId: "1", name: "example1" }}
          props2={100}
        />
        <PassingPropsToComponentC2 props1={"C2"} props2={99} />
        <PassingPropsToComponentC2 props1={"C3"} />
        <PassingJSXToChildren />
        <ConditionalRendering />
        <RenderingLists />
        <FilteringLists />
      </div>
    </>
  );
}

export default App;
