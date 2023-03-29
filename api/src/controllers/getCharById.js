const axios = require("axios");


const getCharById = (res, id) => {
  axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.data)
  .then((data) => {
    const pokemon = {
      id: data.id,
      name: data.name,
      types: data.types,
      image: data.sprites.other['official-artwork'].front_default 
    };
    res
    .writeHead(200, { "Content-type": "application/json" })
    .end(JSON.stringify(pokemon))
  })
  .catch((err) => 
      res
      .writeHead(500, { "Content-type": "text/plain" })
      .end(`El pokemon con id: ${id} no fue encontrado`)
  )
}


module.exports = getCharById;
