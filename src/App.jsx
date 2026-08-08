// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import { Component } from "react";
import initialState from "./artist.json";

class App extends Component {
  state = {
    artist: initialState,
    filter: "",
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      artist: prev.artist.filter((artist) => artist.id !== id),
    }));
  };

  changeInput = (evt) => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const { artist, filter } = this.state;

    const filteredArtistName = artist.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <input
          onChange={this.changeInput}
          className="search"
          type="text"
          placeholder="search album"
          value={filter}
          name="filter"
        />

        <ul>
          {filteredArtistName.map(
            ({
              id,
              name,
              gender,
              country,
              genre,
              birthYear,
              albums,
              isActive,
              awards,
            }) => {
              return (
                <li key={id} className="item">
                  <h2>{name}</h2>
                  <p>{gender}</p>
                  <p>{country}</p>
                  <p>{birthYear}</p>
                  <p>{albums}</p>
                  <p>{awards}</p>
                  <p>{genre}</p>
                  <p>{isActive ? "Active" : "Not Active"}</p>

                  <button type="button" onClick={() => this.handleDelete(id)}>
                    Видалити
                  </button>
                </li>
              );
            },
          )}
        </ul>
      </>
    );
  }
}

export default App;
