export const Characters = () => {
  const personajes = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
      },
      location: {
        name: "Citadel of Ricks",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
      },
      location: {
        name: "Citadel of Ricks",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  //llaves dentro del return para poder meter codigo js
  return (
    <>
      {personajes.map((item, index) => (
        <div className="tarjeta" key={item.id}>
          <img className="foto" src={item.image} />
          <div className="info">
            <p className="nombre">{item.name}</p>
            <p className="datos">
              {item.status}-{item.species}
            </p>
            <p className="planeta">{item.origin.name}</p>
            <p className="localizacion">{item.location.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
