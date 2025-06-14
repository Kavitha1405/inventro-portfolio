import { pets } from "../data/pets.js";

function petCard(pet) {
  return `<article>
  <h3>${pet.breed}</h3>
  <p>${pet.type}</p>
  <a href="pet#${pet.id}">Details</a>
  </article>`;
}
function Pets() {
  return `
    <h2>Pets</h2>
    ${pets.map(petCard).join("")}`;
}

export default function render() {
  document.getElementById("app").innerHTML = Pets();
}
