import "./RenderingLists.css";

const people: string[] = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function RenderingLists() {
  const listItems = people.map((person: string) => (
    <li style={{ textAlign: "center" }}>{person}</li>
  ));

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "20px" }}>
        Rendering List 25/04/2025
      </h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default RenderingLists;

export function FilteringLists() {
  type Person = {
    id: number;
    name: string;
    profession: string;
    accomplishment?: string;
    imageId: string;
  };

  function getImageUrl(person: Person): string {
    return "https://i.imgur.com/" + person.imageId + "s.jpg";
  }
  const people: Person[] = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  const chemists = people.filter(
    (person: Person) => person.profession === "chemist"
  );

  const listItems = chemists.map((person: Person) => (
    <>
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession}
          {person.accomplishment && ` known for ${person.accomplishment}`}
        </p>
      </li>
    </>
  ));

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Filtering list for chemist List 25/4/2025</h1>
        <ul>{listItems}</ul>
      </div>
    </>
  );
}

// JSX elements directly inside a map() call always need keys!

// Rules of keys
// Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
// Keys must not change or that defeats their purpose! Don’t generate them while rendering.
