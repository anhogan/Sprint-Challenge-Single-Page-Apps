import React from "react";
import { CharacterImage, CharacterName } from './StyledComponents';

export default function CharacterCard (props) {
  return (
    <div>
      <div>
        <CharacterImage src={props.image} alt={props.name} />
      </div>
      <CharacterName>{props.name}</CharacterName>
      <p><strong>Species: </strong>{props.species}</p>
      <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Origin: </strong>{props.origin.name}</p>
      <p><strong>Location: </strong>{props.location.name}</p>
    </div>
  );
}
