import React, { Component } from 'react';

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = { term: '' };
  }
  // update component with setState and re-render to the dom
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}/>
      </div>
    );
  }
}

export default SearchBar;
