import React from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromServer from "../services/data";
import Header from "./Header";
import Home from "./Home";
import "../stylesheets/App.sass";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      search: ""
    };
    this.getCharacterFilter = this.getCharacterFilter.bind(this);
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      this.setState({
        characters: data.results
      });
    });
  }
  getCharacterFilter(event) {
    const search = event.currentTarget.value;
    this.setState({
      search: search
    });
  }
  render() {
    const { characters, search } = this.state;
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  getCharacterFilter={this.getCharacterFilter}
                  search={search}
                  characters={characters}
                />
              );
            }}
          />

          <Route
            path="/character-detail/:characterId"
            render={routerProps => {
              return (
                <CharacterDetail
                  routerProps={routerProps}
                  characters={characters}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
