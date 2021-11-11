import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  state = {
    searchWord: ''
  };

  onSearchChange = (e) => {
    const searchWord = e.target.value;
    this.setState({searchWord});
    this.props.onSearchChange(searchWord);
  };

  render() {
    return (
      <input type="text"
             className="search-input"
             placeholder="Search"
             value={this.state.searchWord}
             onChange={this.onSearchChange} />
    );
  }
}