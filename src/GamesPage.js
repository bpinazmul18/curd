import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GamesList from "./GamesList";

const GamesPage = ({ games }) => {
    
  return (
    <div>
      <h1>Games List</h1>
      <GamesList games={games} />
    </div>
  );
};

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    games: state.games,
  };
}

export default connect(mapStateToProps)(GamesPage);
