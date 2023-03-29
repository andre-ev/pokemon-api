import style from "./Cards.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";

export default function Card({
  id, name, types, image, onClose
}) {
  const dispatch = useDispatch();
  const allCharacters = useSelector(state => state.allCharacters);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if(isFav) { 
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ id, name, types, image, onClose }))
    }
  }

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if(fav.id === id) {
        setIsFav(true);
      }
    })
  }, [allCharacters]);

  return (
    <div className={style.card}>
      {                                                                    
         isFav ? (                                                         
            <button onClick={handleFavorite}>❤️</button>                   
         ) : (                                                             
            <button onClick={handleFavorite}>🤍 </button>                  
         )                                                                
      }                                                                    
      <button onClick={onClose}>X</button>
      <img  src={image} alt={name} className={style.imgNormalizada} /> 
      <br />
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div className={style.headType}>
        <h4>Types</h4>
        {
          types.map((type, index) => {
            return(
              <li key={index}>{type.type.name}</li>
            );
          })
        }
      </div>
    </div>
  );
}
