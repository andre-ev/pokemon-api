const http = require("http");
const characters = require("../utils/data");


// Creando y levantando servidor data.js
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")

  if(req.url.includes("api/pokemons")) {
    let id = req.url.split("/").at(-1);
    
    // let characterFilter = characters.filter((char) => {
    //   return char.id === Number(id);
    // })

    // Usando Find para filtrar el personaje 
    let characterFilter = characters.find((char) => {
      return char.id === Number(id);
    })

    res
      .writeHead(200, {"Content-type": "application/json"})
      .end(JSON.stringify(characterFilter))
  }
}).listen(3001, "0.0.0.0")
