import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css"

const Favorites = () => {
  const { myFavorites } = useSelector(state => state);

  return(
    <div className={style.contenedor}>
      {
        myFavorites.map((pokemon) => {
          return(
            <div className={style.card}>
              <img  src={pokemon.image} alt={pokemon.name} className={style.imgNormalizada} /> 
              <br />
              <Link to={`/detail/${pokemon.id}`}>
                <h2>{pokemon.name}</h2>
              </Link>
              <div className={style.headType}>
                <h4>Types</h4>
                {
                  pokemon.types.map((type) => {
                    return(
                      <li key={type.slot}>{type.type.name}</li>
                    );
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Favorites;
