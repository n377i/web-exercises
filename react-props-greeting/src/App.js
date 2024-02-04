import "./styles.css";

function Greeting({ name }) {
  const coachNames = ["Merle", "Diego", "Feline", "Felix", "Niklas", "Roland"];
  const isCoach = coachNames.includes(name);

  return (
    <div>{isCoach ? <h1>Hello, Coach!</h1> : <h1>Hello, {name}!</h1>}</div>
  );
}

export default function App() {
  return <Greeting name="Roland" />;
}
