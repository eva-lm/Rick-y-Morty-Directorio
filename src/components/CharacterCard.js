import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = props => {
  const { character } = props;
  return (
    <div>
      <div className="character__image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <h2 className="character__name">{character.name}</h2>
      <p className="character__specie">{character.species}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterCard;
