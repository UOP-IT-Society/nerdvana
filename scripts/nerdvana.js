// Get's the nerdvana number and inserts it into the dom
const domObj = document.querySelector("#nerdvana-number");

fetch("../nerdvana.json")
  .then((response) => response.json())
  .then((json) => {
    domObj.textContent = json.number;
  })
  .catch((error) => console.error("Unable to load JSON:", error));
