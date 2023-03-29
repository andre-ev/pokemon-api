const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");

// Creando una función para obtener los pokemon por medio del id
// Utilizamos destructuring para obtener el id del request y
// el objeto data del response
async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const { data } = await axios(URL + id);
    const pokemon = {
      id: data.id,
      name: data.name,
      types: data.types,
      image: data.sprites.other['official-artwork'].front_default 
    };
    return res.status(200).json(pokemon);
  } catch(error) {
    return res.status(500).send(error.message);
  }
}


module.exports = getCharById;
