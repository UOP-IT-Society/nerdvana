const staffGrid = document.querySelector("#staff-grid");
const societiesGrid = document.querySelector("#societies-grid");

fetch("../nerdvana.json")
  .then((response) => response.json())
  .then((json) => {
    const { staff, societies } = json;

    // ---- STAFF ----
    if (staff) {
      staff.forEach((member) => {
        const imageName = member.name.replace(/\s+/g, "_");

        const card = document.createElement("div");
        card.classList.add("card", "staff-card");

        card.innerHTML = `
          <img 
            src="images/staff/${imageName}.png" 
            alt="${member.name}"
            class="card-image"
          />
          <div class="card-content">
            <h3>${member.name}</h3>
            <p>${member.role ?? ""}</p>
          </div>
        `;

        staffGrid.appendChild(card);
      });
    }

    // ---- SOCIETIES ----
    if (societies) {
      societies.forEach((society) => {
        const imageName = society.name.replace(/\s+/g, "_");

        const card = document.createElement("div");
        card.classList.add("card", "society-card");

        card.innerHTML = `
          <a href="${society.union}" target="_blank">
            <img 
              src="images/societies/${imageName}.png" 
              alt="${society.name}"
              class="card-image"
            />
            <div class="card-content">
              <h3>${society.name}</h3>
              <p>${society.description}</p>
            </div>
          </a>
        `;

        societiesGrid.appendChild(card);
      });
    }
  })
  .catch((error) => console.error("Unable to load JSON:", error));
