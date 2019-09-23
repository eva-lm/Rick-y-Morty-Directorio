import React from "react";
import getDataFromServer from "../services/data";
import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: []
      //search: ""
    };
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      console.log(data);
      this.setState({
        characters: data.results
      });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <CharacterList characters={this.state.characters} />
        Hola
      </div>
    );
  }
}

export default App;
