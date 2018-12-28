import React from 'react';
import { connect } from 'react-redux';

import { getSearchQueries } from '../selectors';
import { deleteSearchQuery, getPhoto } from '../actions';

class SearchedQueries extends React.Component {
  onQuerySelect = (e, query) => {
    e.preventDefault();
    this.props.getPhoto(query);
  };

  onQueryDelete = (query) => {
    this.props.deleteSearchQuery(query);
  };

  render() {
    return(
      <aside className="searched-queries">
        <h2>Searched queries</h2>
        <ul className="searched-queries__list">
          {this.props.searchedQueries.length ?
            this.props.searchedQueries.map(item => (
              <li key={item} className="searched-queries__list-item">
                <a href="/" onClick={(e) => this.onQuerySelect(e, item)}>{item}</a>
                <button
                  className="btn"
                  onClick={() => this.onQueryDelete(item)}
                >
                  Delete
                </button>
              </li>
            ))
            :
            <span> You searches will be stored here </span>
          }
        </ul>
      </aside>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    getPhoto: state.getPhoto,
    deleteSearchQuery: state.deleteSearchQuery,
    searchedQueries: getSearchQueries(state.searchQueries)
   };
};

export default connect(mapStateToProps, { getPhoto, deleteSearchQuery })(SearchedQueries);