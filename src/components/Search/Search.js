import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  handleChange = event => {
    this.props.updateSearch(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="search-form">
          <div className="form-group my-1">
            <input
              type="text"
              className="form-control"
              id="search"
              aria-describedby="searchHelp"
              placeholder="Search for booking by product name"
              value={this.props.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </Fragment>
    );
  }
}

Search.defaultProps = {
  updateSearch: () => {},
  term: ''
};

Search.propTypes = {
  updateSearch: PropTypes.func,
  term: PropTypes.string
};

export default Search;
