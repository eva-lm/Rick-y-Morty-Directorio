import React from "react";

const CharacterCard = props => {
  console.log("props -->", props);
  return (
    <div>
      <div className="character__image-container">
        <img src={props.character.image} alt={props.character.name} />
      </div>
      <h2 className="character__name">{props.character.name}</h2>
      <p className="character__specie">{props.character.species}</p>
    </div>
  );
};

export default CharacterCard;
