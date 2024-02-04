import "./Tag.css";

export default function Tag({ tag }) {
  const isHighlight = tag === "admin";
  return (
    <li className={`tag ${isHighlight ? "tag--highlight" : ""}`}>{tag}</li>
  );
}
