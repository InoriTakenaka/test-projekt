import { BrowserRouter } from 'react-router-dom';
import Header from './Index/Header';
import HomeBody from './Index/HomeBody';
import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ""
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(searchtext) {
    this.setState({ filter: searchtext })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header onSearchHandler={this.onSearch} />
          <HomeBody dataFilter={this.state.filter} />
        </div>
      </BrowserRouter >
    );
  }

}

export default App;
