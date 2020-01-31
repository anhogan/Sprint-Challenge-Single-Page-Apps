import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
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
    <div>
      <SearchForm setCharacters={setCharacters} />
      <section className="character-list">
        {characters.map(character => (
          <div>
            <CharacterCard image={character.image} name={character.name} species={character.species} gender={character.gender} origin={character.origin} location={character.location} />
          </div>
        ))}
      </section>
    </div>
  );
}
