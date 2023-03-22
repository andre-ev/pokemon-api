import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [ characters, setCharacters ] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${detailId}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.name) {
          const character = {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            hp: data.stats.find((stat) => stat.stat.name === 'hp')?.base_stat,
            speed: data.stats.find((stat) => stat.stat.name === 'speed')?.base_stat,
            height: data?.height,
            weight: data?.weight,
            types: data.types,
          };
          setCharacters(character);
        } else {
          window.alert("No hay personajes con ese ID");
        }
    })
    .catch((error) => {
      window.alert("No hay personajes con ese ID")
    });
    return setCharacters({});
  }, [detailId])

  return(
    <div className={style.card} key={characters.id}>
      <h2>Detail</h2>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <h1>{characters?.name}</h1>
      <img src={characters?.image} alt={characters?.name} className={style.imgNormalizada} />
      <p>HP: {characters?.hp}</p>
      <p>Speed: {characters?.speed}</p>
      <p>Height: {characters?.height}</p>
      <p>Weight: {characters?.weight}</p>
      <p>Types:</p>
      {
        characters?.types?.map((type) => {
          return(
            <li key={type.slot}>{type.type.name}</li>
          );
        })
      }

    </div>
  );
}

export default Detail;
