import React from 'react'
import { connect } from 'react-redux'

import { getPhoto } from '../selectors'

class ImageDisplay extends React.Component {
  render () {
    return (
      <main className="image-display">
        {this.props.photo
          ? <img
            src={this.props.photo.urls.regular}
            alt={this.props.photo.description}
            className="image-display__image"
          />
          : <div className="image-display__info-container">
              <p className="image-display__info"> Your image will appear here </p>
            </div>
        }
      </main>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    photo: getPhoto(state.search)
  }
}

export default connect(mapStateToProps, { getPhoto })(ImageDisplay)
