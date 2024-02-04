import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 Banana", color: "yellow" },
    { id: 1, name: "🍐 Pear", color: "green" },
    { id: 2, name: "🍎 Apple", color: "red" },
    { id: 3, name: "🍋 Lemon", color: "yellow" },
    { id: 4, name: "🥝 Kiwi", color: "green" },
    { id: 5, name: "🍓 Strawberry", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
