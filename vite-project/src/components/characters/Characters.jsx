import { useState } from "react";

export const Characters = () => {
  //hooks(ganchos) -> sirven para manipular los datos
  //useState -> podemos guardar un valor y setearle un nuevo valor -> const [valor, setValor] = useState([])
  //useEffect -> ejecutamos el codigo en el momento en el que lo necesitamos
  /*
      useState(() => {
          se va a ejecutar el codigo
      },[])
      si entre los corchetes no le pasamos nada, se ejecuta solo al principio, y si no, cada vez que se actualice la variable que le pasamos   
  */

  const [characters, setCharacters] = useState([]);

  useState(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  //llaves dentro del return para poder meter codigo js
  return (
    <>
      {characters.map((item, index) => (
        <div className="tarjeta" key={item.id}>
          <img className="foto" src={item.image} />
          <div className="info">
            <p className="nombre">{item.name}</p>
            <p className="datos">
              <span className="status_icon"></span>
              {item.status} - {item.species}
            </p>
            <p className="planeta">{item.origin.name}</p>
            <h4>Last known location:</h4>
            <p className="localizacion">{item.location.name}</p>
            <h4>Episode:</h4>
            <p className="firstSeen">-------------</p>
          </div>
        </div>
      ))}
    </>
  );
};
