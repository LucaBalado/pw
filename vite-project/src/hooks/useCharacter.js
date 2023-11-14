import { useState } from "react";

export const useCharacter = () => {
  const [episodios, setEpisodios] = useState([]);
  const getEpisodeFromCharacter = (array) => {
    return fetch(`https://rickandmortyapi.com/api/episode/${array}`)
      .then((response) => response.json())
      .then((data) => setEpisodios(data));
  };
  return { getEpisodeFromCharacter, episodios, setEpisodios };
};
