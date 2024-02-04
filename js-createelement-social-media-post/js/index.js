console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newArticle = document.createElement("article");
newArticle.classList.add("post");

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "Not another social media post! It should be a bit longer.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@newuser";

const newLikeButton = document.createElement("button");
newLikeButton.type = "button";
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", handleLikeButtonClick);

newFooter.append(newSpan);
newFooter.append(newLikeButton);
newArticle.append(newParagraph);
newArticle.append(newFooter);
document.body.append(newArticle);
