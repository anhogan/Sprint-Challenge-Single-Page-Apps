import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from "axios";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error.message)
      })
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <div>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p><strong>Species:</strong>{character.species}</p>
          <p><strong>Gender:</strong>{character.gender}</p>
          <p><strong>Origin:</strong>{character.origin.name}</p>
          <p><strong>Location:</strong>{character.location.name}</p>
        </div>
      ))}
    </section>
  );
}
