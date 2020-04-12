import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./styles.css";

class App extends React.Component {
  state = { image: [] };
  onSearchSubmit = async term => {
    console.log("entered");
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID KAb9M5r141jy7ls7idyTsC_kBK7lyxAqFEOXv34vqzg"
      }
    });
    this.setState({ image: response.data.results });
    console.log("RE", response);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.image} />
      </div>
    );
  }
}
export default App;
