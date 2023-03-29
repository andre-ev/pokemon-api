const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");

const getCharDetail = (req, res) => {
  const { detailId } = req.params;

  if(detailId) {
    axios(URL + detailId)
    .then(({ data }) => {
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

      return res.status(200).json(pokemon);  
    })
    .catch((err) => {
      return res.status(500).send(error.message);
    });
  } else {
    return res.status(500).send("Debes proveer un id por parametro");
  }
}


module.exports = getCharDetail;
