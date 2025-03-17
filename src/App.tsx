import "./App.css";
import ComponentExample from "./Nrael/SectionA/ComponentExample";
import MultipleComponentOnSameFile from "./Nrael/SectionA/MultipleComponentOnSameFile";

function App() {
  return (
    <>
      <div>
        {/* loading a component */}
        <ComponentExample />
        <MultipleComponentOnSameFile />
      </div>
    </>
  );
}

export default App;
