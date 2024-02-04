console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error: " + response.status);
    return null;
  }
  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log("Error parsing JSON");
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
      errorElement.innerText = "";
    } catch (error) {
      userElement.innerText = "Info not found.";
      errorElement.innerText = "Cannot load data. Please try another one.";
    }
  })
);
