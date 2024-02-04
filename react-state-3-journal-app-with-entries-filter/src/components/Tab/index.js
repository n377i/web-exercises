import "./Tab.css";
import Badge from "../Badge";

export default function Tab({
  children,
  isActive,
  onClick,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <button
      className={`tab${isActive ? " tab--active" : ""}`}
      onClick={onClick}
    >
      {children}
      {isActive && filter === "all" && (
        <Badge isActive>{allEntriesCount}</Badge>
      )}
      {isActive && filter === "favorites" && (
        <Badge>{favoriteEntriesCount}</Badge>
      )}
    </button>
  );
}
