const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor");
  const item = contenedor.querySelector("#pokemon");
  const image = item.getElementsByTagName("img")[0];
  image.setAttribute(
    "src",
    "https://i.pinimg.com/736x/bf/d8/d7/bfd8d7704cf357fdc06f003e8bfdc272.jpg"
  );
  document.getElementById("line").style.display = "none";
});

const iniciar = () => {
  const random = getRandomId(1, 152);
  fetchData(random);
};

const fetchData = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await resp.json();
  console.log(pokemon);
  pintarPokemon(pokemon);
};

const pintarPokemon = (pokemon) => {
  const contenedor = document.getElementById("contenedor");
  document.getElementById("line").style.display = "block";
  const item = contenedor.querySelector("#pokemon");
  const image = item.getElementsByTagName("img")[0];
  image.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  const namePokemon = item.getElementsByTagName("span")[0];
  namePokemon.textContent = pokemon.name;

  const item2 = contenedor.querySelector("#ataque");
  const ataque = item2.getElementsByTagName("span")[0];
  ataque.textContent = pokemon.stats[1].base_stat + "K";
  const titulo = item2.getElementsByTagName("p")[0];
  titulo.textContent = "Ataque";

  const item3 = contenedor.querySelector("#ataquespecial");
  const ataqueEspecial = item3.getElementsByTagName("span")[0];
  ataqueEspecial.textContent = pokemon.stats[3].base_stat + "K";
  const tituloDos = item3.getElementsByTagName("p")[0];
  tituloDos.textContent = "Ataque Especial";

  const item4 = contenedor.querySelector("#defensa");
  const defensa = item4.getElementsByTagName("span")[0];
  defensa.textContent = pokemon.stats[2].base_stat + "K";
  const tituloTres = item4.getElementsByTagName("p")[0];
  tituloTres.textContent = "Defensa";
};
