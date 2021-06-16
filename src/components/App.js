import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex';
import HogSearch from './HogSearch';

class App extends Component {

  state={
    hogs: hogs, //imported from porker data
    displayHogs: hogs
  }

  filterHogsHandler = () => {

    let h = this.state.hogs.filter(hog => hog.greased === true)

    this.setState({
      displayHogs: h
    })
  } // filterHogs

  showAllHandler = () => {

    this.setState({
      displayHogs: this.state.hogs
    })
    
  } //showAll

  sortHogsByName = () => {
    // debugger
    // let h = this.state.displayHogs.sort( (a,b) => a.name.localeCompare(b.name) ) 
    let h = [...this.state.displayHogs]
    h.sort( (a,b) => a.name > b.name ? 1 : -1) // Both would work !!
    // console.log(h)
    this.setState({
      displayHogs: h
    })
  }

  sortByWeight = () => {

    let h = [...this.state.displayHogs]
    h.sort( (a,b) => a.weight - b.weight) // you can use the minus sign because it involves integers!
    
    this.setState({
      displayHogs: h
    })

  }
  

  render() {
    return (
      <div className="App">
          < Nav />
          <HogSearch 
          filterHogs={this.filterHogsHandler}
          showAll={this.showAllHandler}
          sortHogsByName={this.sortHogsByName}
          sortByWeight={this.sortByWeight}
          />
          <br></br>
          <HogIndex hogs={this.state.displayHogs} />
          

      </div>
    )
  }
}

export default App;
