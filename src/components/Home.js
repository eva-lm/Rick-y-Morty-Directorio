import React, { Fragment } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import PropTypes from "prop-types";

const Home = props => {
  const { getCharacterFilter, search, characters } = props;

  return (
    <Fragment>
      <Filters getCharacterFilter={getCharacterFilter} search={search} />
      <CharacterList characters={characters} search={search} />
    </Fragment>
  );
};

Home.propTypes = {
  search: PropTypes.string.isRequired,
  getCharacterFilter: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
