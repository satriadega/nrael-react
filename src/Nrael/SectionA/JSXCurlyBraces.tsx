import "./JSXCurlyBraces.css";
import formatDate from "./lib/formatDate";

// add JavaScript logic or reference a dynamic property inside that markup (curly braces in JSX).

const today = new Date();

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function JSXCurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <div className="div-bgc-purple">
      <img className="avatar" src={avatar} alt={description} />
      <h1>{description}'s To Do List</h1>
      {/* another example */}
      <h1>To Do List for {formatDate(today)}</h1>
      {/* Using “double curlies”: CSS and other objects in JSX  */}
      <div style={person.theme}>
        <h1>{person.name}'s Todos (Double Curlies for CSS Styling)</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </div>
  );
}

export default JSXCurlyBraces;

// <{tag}>Gregorio Y. Zara's To Do List</{tag}> this will not work.
