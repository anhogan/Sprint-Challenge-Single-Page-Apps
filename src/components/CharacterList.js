import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import { CharacterSection, CharacterDiv } from './StyledComponents';
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
      <CharacterSection className="character-list">
        {characters.map(character => (
          <CharacterDiv>
            <CharacterCard image={character.image} name={character.name} species={character.species} gender={character.gender} origin={character.origin} location={character.location} />
          </CharacterDiv>
        ))}
      </CharacterSection>
    </div>
  );
}
