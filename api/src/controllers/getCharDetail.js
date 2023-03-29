const axios = require("axios");

const getCharDetail = (res, id) => {
  axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.data)
  .then((data) => {
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      hp: data.stats.find((stat) => stat.stat.name === 'hp')?.base_stat,
      speed: data.stats.find((stat) => stat.stat.name === 'speed')?.base_stat,
      height: data?.height,
      weight: data?.weight,
      types: data.types,
    };
    res
    .writeHead(200, { "Content-type": "application/json"})
    .end(JSON.stringify(pokemon))
  })
  .catch((err) => 
    res
    .writeHead(500, { "Content-type": "text/plain"})
    .end(`El pokemon con id: ${id} no fue encontrado`)
  )
}


module.exports = getCharDetail;
