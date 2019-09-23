import React from "react";
import PropTypes from "prop-types";

const Filters = props => {
  const { getCharacterFilter, search } = props;
  return (
    <label>
      Buscar
      <input type="text" onChange={getCharacterFilter} value={search} />
    </label>
  );
};

Filters.propTypes = {
  getCharacterFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Filters;
