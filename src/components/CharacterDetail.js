import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const detail = characters.filter(item => item.id === characterId);

  if (detail[0]) {
    const { name, image, status } = detail[0];
    return (
      <Fragment>
        <div className="character__detail">
          <h2 className="detail__name">{name}</h2>
          <div className="detail__image-container">
            <img src={image} alt={name} />
          </div>
          <p className="detail__status">{status}</p>
        </div>
        <Link to="/" className="back">
          Volver al listado
        </Link>
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
