import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState();

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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  return (
    <section className="search-form">
      <form>
        <input type="text" name="search" placeholder="Search for a character" value={query} onChange={handleChange} />
        {/* <button type="submit">Search!</button> */}
      </form>
    </section>
  );
}
