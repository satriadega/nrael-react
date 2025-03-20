import { getImageUrl } from "./getImageUrl";
import { Person } from "./Model";

export default function Avatar({
  person,
  size,
}: {
  person: Person;
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
