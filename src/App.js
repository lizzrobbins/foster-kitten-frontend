import React, { Component } from 'react';
import Header from './Components/Header'
import ShowFosters from './Components/ShowFosters'
import './App.css';

const allFostersUrl = 'https://foster-backend.herokuapp.com/all-fosters'
const fosterSearchUrl = 'https://foster-backend.herokuapp.com/foster-search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allFostersData: [],
      fosterSearchData: []
    }
  }

  componentDidMount() {
    fetch(allFostersUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          allFostersData: data
        })
      })
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
        <ShowFosters fosterData={this.state.fosterSearchData}/>
      </div>
    );
  }
}

export default App;
