import Card from './Card';
import style from './Cards.module.css'

export default function Cards({pokemons, onClose}) {

   return(
    <div className={style.contenedor}>
      {
        pokemons.map(({
          id, name, types, image
        }) => {
          return(
              <Card
                key={id}
                id={id}
                name={name}
                types={types}
                image={image}
                onClose={() => onClose(id)}
              />
          );
        })
      }
    </div>
   );
}
