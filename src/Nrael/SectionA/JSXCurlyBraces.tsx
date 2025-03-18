import "./JSXCurlyBraces.css";
import formatDate from "./lib/formatDate";

// add JavaScript logic or reference a dynamic property inside that markup (curly braces in JSX).

const today = new Date();

function JSXCurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <div className="div-bgc-purple">
      <img className="avatar" src={avatar} alt={description} />
      <h1>{description}'s To Do List</h1>
      {/* another example */}
      <h1>To Do List for {formatDate(today)}</h1>
    </div>
  );
}

export default JSXCurlyBraces;
