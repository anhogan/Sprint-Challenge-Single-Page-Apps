import React, { useState, useEffect } from "react";
import { SearchDiv, SearchInput } from './StyledComponents'
import axios from "axios";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(response => {
        console.log(response.data);
        const results = response.data.results.filter((character) => {
          character.name.toLowerCase().includes(query.toLowerCase())
        });
        props.setCharacters(results);
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value)
  };

  return (
    <section className="search-form">
      <SearchDiv>
        <SearchInput type="text" name="search" placeholder="Search for a character" value={query} onChange={handleChange} />
      </SearchDiv>
    </section>
  );
}
