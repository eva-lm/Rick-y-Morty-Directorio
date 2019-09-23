import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { characters } = props;
  return (
    <ul className="character__list">
      {characters.map((character, index) => {
        return (
          <li className="character__item" key={index}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;
