import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onFormSubmit = e => {
    console.log("enterd");
    //e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    console.log("Rekha", this.state.term);
    return (
      <div className="ui-segment">
        <div className="field">
          <label>Image Search</label>
          <br />
          <br />
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </div>
        <br />
        <button onClick={this.onFormSubmit}>Submit</button>
      </div>
    );
  }
}
export default SearchBar;
