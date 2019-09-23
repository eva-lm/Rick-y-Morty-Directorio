import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

const CharacterList = props => {
  const { characters, search } = props;
  return (
    <ul className="character__list">
      {characters
        .filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
        .map((character, index) => {
          return (
            <li className="character__item" key={index}>
              <CharacterCard character={character} />
            </li>
          );
        })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired
};

export default CharacterList;
