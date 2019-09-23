import React from "react";
import getDataFromServer from "../services/data";
import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";

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
    console.log(search);
    this.setState({
      search: search
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Filters
          getCharacterFilter={this.getCharacterFilter}
          search={this.state.search}
        />
        <CharacterList
          characters={this.state.characters}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
