// Bro Code

// fetch(url, {options})

// *** fetch()
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Data not found.");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// async-await
async function fetchData() {
  try {
    const pokeName = document.getElementById("name").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch resource.");
    }
    const data = await response.json();
    const pokeSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokeSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
