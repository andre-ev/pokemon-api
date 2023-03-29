import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards, setPokemonTypes } from "../../redux/action";
import style from "./Favorites.module.css"

const Favorites = () => {
  const { myFavorites, pokemonTypes } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(pokemonTypes.length === 0) {
      dispatch(setPokemonTypes());
    }
  }, [dispatch, pokemonTypes])

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return(
    <div className={style.contenedor}>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disabled">Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled="disabled">Filter By</option>
          {
            pokemonTypes.map((type, index) => {
              return(
                <option key={index} value={type}>{type}</option>
              );
            })
          }
        </select>
      </div>
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
                  pokemon.types.map((type, index) => {
                    return(
                      <li key={index}>{type.type.name}</li>
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
