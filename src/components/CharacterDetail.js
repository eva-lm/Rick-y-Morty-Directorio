import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  return (
    <Fragment>
      <div>Detalle</div>
      <Link to="/" className="back">
        Volver al listado
      </Link>
    </Fragment>
  );
};

export default CharacterDetail;
