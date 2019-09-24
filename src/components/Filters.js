import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getCharacterFilter, search } = props;
  return (
    <div className="filter__container">
      <input
        className="filter__name"
        type="text"
        onChange={getCharacterFilter}
        value={search}
      />
    </div>
  );
};

Filters.propTypes = {
  getCharacterFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Filters;
