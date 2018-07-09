import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';

const fosterSearchUrl = 'https://foster-backend.herokuapp.com/foster-search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fosterSearchData: []
    }
  }

  componentDidMount() {
    fetch(fosterSearchUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fosterSearchData: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
