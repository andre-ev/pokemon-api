import { useState } from 'react';

export default function SearchBar({onSearch}) {
  const [pokemons, setPokemons] = useState('');

  const handleChange = (event) => {
    setPokemons(event.target.value);
  }

  return (
    <div>
       <input type='search' value={pokemons} onChange={handleChange}/>
       <button onClick={() => onSearch(pokemons)}>Agregar</button> 
    </div>
  );
}
