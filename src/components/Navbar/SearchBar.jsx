import { useState } from "react";
import style from "./Nav.module.css";

export default function SearchBar({onSearch}) {
  const [pokemons, setPokemons] = useState("");

  const handleChange = (event) => {
    setPokemons(event.target.value);
  }

  return (
    <div className={style["search-container"]}>
       <input type="search" value={pokemons} onChange={handleChange} placeholder="Add..."/>
       <button onClick={() => onSearch(pokemons)}>Add</button> 
    </div>
  );
}
