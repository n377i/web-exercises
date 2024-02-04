import { Header } from "../Header/Header";
import { Form } from "../Form/Form";
import { CardList } from "../CardList/CardList";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
