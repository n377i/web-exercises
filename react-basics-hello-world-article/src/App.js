import React from "react";
import "./styles.css";

function HelloWorldArticle(title, text) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default function App() {
  return HelloWorldArticle("Hello world!", "Wassup?");
}
