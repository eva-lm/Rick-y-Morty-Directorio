import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const detail = characters.filter(item => item.id === characterId);

  if (detail[0]) {
    const { name, image, status, origin, episode, species } = detail[0];
    return (
      <Fragment>
        <div className="character__detail">
          <Link to="/" className="back">
            <button>Volver al listado</button>
          </Link>
          <div className="detail__card">
            <div className="detail__image-container">
              <img src={image} alt={name} />
            </div>
            <h2 className="detail__name">{name}</h2>
            <ul>
              <li className="detail__status">Status: {status}</li>
              <li className="detail__specie">Specie: {species}</li>
              <li className="detail__origin">Origen: {origin.name}</li>
              <li className="detail__episode">
                Número de episodios en los que sale: {episode.length}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>Esta página no existe</p>
        <Link to="/" className="back">
          Volver al listado
        </Link>
      </Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default CharacterDetail;
