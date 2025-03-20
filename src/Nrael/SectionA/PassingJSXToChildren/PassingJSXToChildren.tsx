import Avatar from "./Avatar";
import "./PassingJSXToChildren.css";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card center">{children}</div>;
}
function PassingJSXToChildren() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

export default PassingJSXToChildren;
