import React, { Component } from 'react'

import SearchBar from '../components/SearchBar'
import ImageDisplay from '../components/ImageDisplay'
import SearchedQueries from '../components/SearchedQueries'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <h1 className='visually-hidden'>A random photo search engine</h1>
        <SearchBar />
        <section className='main-content'>
          <ImageDisplay />
          <SearchedQueries />
        </section>
      </div>
    )
  }
}

export default App
