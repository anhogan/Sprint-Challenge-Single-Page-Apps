import React from "react";

export default function CharacterCard (props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p><strong>Species:</strong>{props.species}</p>
      <p><strong>Gender:</strong>{props.gender}</p>
      <p><strong>Origin:</strong>{props.origin.name}</p>
      <p><strong>Location:</strong>{props.location.name}</p>
    </div>
  );
}
