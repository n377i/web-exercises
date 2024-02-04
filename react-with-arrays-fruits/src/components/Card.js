import "./Card.css";

export default function Card({ name, color }) {
  const cardClass = `card card--${color}`;

  return <p className={cardClass}>{name}</p>;
}
