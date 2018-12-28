import React from 'react';
import { connect } from 'react-redux';

import { getErrors } from '../selectors';
import { getPhoto } from '../actions';

class SearchBar extends React.Component {
  state = { inputValue: ''};

  onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: Add error message if user doesn't enter a query
    if (!this.state.inputValue) {
      return null;
    } else {
      this.setState({ inputValue: '' });
      this.props.getPhoto(this.state.inputValue);
    }
  };

  //TODO: Make error messages more user-friendly
  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map(error => {
        return <p className="error">{error}</p>;
      })
    };
  };

  render() {
    return(
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className="form"
        >
          <div className="form-field">
            <label
              htmlFor="searchbar-input"
              className="form-field__label"
            >
              Show me a random photo of...
            </label>
            <input
              id="searchbar-input"
              className="form-field__input"
              placeholder="eg. cat"
              value={this.state.inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value  })}
            />
          </div>
          <button
            type="submit"
            className="form__submit-btn btn"
          >
            Search
          </button>
        </form>
        {this.renderErrors()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    getPhoto: getPhoto,
    errors: getErrors(state.search)
  };
};

export default connect(mapStateToProps, { getPhoto })(SearchBar);
