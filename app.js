// Simple Pokémon Finder
// Your task: complete the TODOs using async/await and fetch.

const form = document.querySelector("#pokemon-form");
const input = document.querySelector("#pokemon-input");
const message = document.querySelector("#message");

const card = document.querySelector("#pokemon-card");
const pokemonImage = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const pokemonType = document.querySelector("#pokemon-type");
const pokemonHeight = document.querySelector("#pokemon-height");
const pokemonWeight = document.querySelector("#pokemon-weight");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pokemon = input.value.trim().toLowerCase();

  if (pokemon === "") {
    showMessage("Please type a Pokémon name or ID.", true);
    return;
  }

  // TODO 1: Call getPokemon(pokemon)
});

async function getPokemon(pokemon) {
  // TODO 2: Use try...catch

  // Inside try:
  // 1. Show message: "Loading..."
  // 2. Hide the card
  // 3. Fetch this URL:
  //    https://pokeapi.co/api/v2/pokemon/${pokemon}
  // 4. Check if response.ok is false. If false, throw an Error.
  // 5. Convert the response to JSON with await response.json()
  // 6. Call showPokemon(data)

  // Inside catch:
  // Show this error message: "Pokémon not found. Try another name or ID."
}

function showPokemon(data) {
  // TODO 3: Complete these DOM updates

  pokemonImage.src = data.sprites.front_default;
  pokemonName.textContent = data.name;

  // Example:
  // pokemonId.textContent = `ID: ${data.id}`;

  // TODO 4: Show the first type
  // Hint: data.types[0].type.name

  // TODO 5: Show height and weight

  card.classList.remove("hidden");
  showMessage("Pokémon loaded successfully!", false);
}

function showMessage(text, isError) {
  message.textContent = text;

  if (isError) {
    message.classList.add("error");
  } else {
    message.classList.remove("error");
  }
}
