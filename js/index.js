
const getRandomId = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}

// document.addEventListener("DOMContentLoaded", () => {
//     const random = getRandomId(1, 152);
//     fetchData(random);
// });

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('contenedor');
    const item = contenedor.querySelector('#pokemon');
    const image = item.getElementsByTagName('img')[0];
    image.setAttribute("src", "https://i.pinimg.com/736x/bf/d8/d7/bfd8d7704cf357fdc06f003e8bfdc272.jpg");
});

const iniciar = () => {
    const random = getRandomId(1, 152);
    fetchData(random);
}

const fetchData = async (id) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resp.json();
    console.log(pokemon);
    pintarPokemon(pokemon)
}

const pintarPokemon = (pokemon) =>{
    const contenedor = document.getElementById('contenedor');
    const item = contenedor.querySelector('#pokemon');
    const image = item.getElementsByTagName('img')[0];
    image.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
    const namePokemon = item.getElementsByTagName('span')[0];
    namePokemon.textContent = pokemon.name;
}
