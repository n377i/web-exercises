import React from "react";
import "./styles.css";

const Article = () => {
  return (
    <article className="article">
      <h2 className="article__title">Awesome title</h2>
      <label htmlFor="articleInput">Great label:</label>
      <input type="text" id="articleInput" />
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        className="article__link"
      >
        Cool link
      </a>
    </article>
  );
};

export default function App() {
  return <Article />;
}
