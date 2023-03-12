import style from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id, name, types, image, onClose
}) {
   return (
      <div className={style.card}>
        <button onClick={onClose}>X</button>
        <img  src={image} alt={name} className={style.imgNormalizada} /> 
        <br />
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <div className={style.headType}>
          <h4>Types</h4>
          {
            types.map((type) => {
              return(
                <li key={type.slot}>{type.type.name}</li>
              );
            })
          }
        </div>
      </div>
   );
}
