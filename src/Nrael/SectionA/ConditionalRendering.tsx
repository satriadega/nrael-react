import "./ConditionalRendering.css";

function ConditionalRendering() {
  return (
    <div
      style={{
        backgroundColor: "chocolate",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      <CRExample1 truthy={true} />
      <CRExample1 truthy={false} />
      <DrinkList />
    </div>
  );
}
export default ConditionalRendering;

function CRExample1({ truthy }: { truthy: boolean }) {
  if (truthy) {
    const temp: string = ", think about it" + (truthy && " - John Lennon");

    return (
      <h1>
        Hi this is {truthy ? "true" : "false"}, {truthy && "yes it's"}
        {temp}
      </h1>
    );
  }
}

/*
Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.
*/
type DrinkInfo = {
  part: string;
  caffeine: string;
  age: string;
};

type DrinkName = "tea" | "coffee";

const drinks: Record<DrinkName, DrinkInfo> = {
  tea: {
    part: "leaf",
    caffeine: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    caffeine: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

type DrinkProps = {
  name: DrinkName;
};

function Drink({ name }: DrinkProps) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div
      style={{
        backgroundColor: "aqua",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
