import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'
import HogForm from './HogForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allHogs: hogs,
      filter: false,
    }
  }
  nameSort = () => {
    this.setState({
      allHogs: this.state.allHogs.sort(function(a, b) {
        let nameA = a.name
        let nameB = b.name
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      }),
    })
  }
  weightSort = () => {
    this.setState({
      allHogs: this.state.allHogs.sort(function(a, b) {
        return (
          a[
            'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
          ] -
          b[
            'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
          ]
        )
      }),
    })
  }
  greasedFilter = () => {
    let greasedHogs = this.state.allHogs.filter(hog => {
      return hog.greased === true
    })
    if (!this.state.filter) {
      this.setState({
        allHogs: greasedHogs,
        filter: true,
      })
    } else {
      this.setState({
        allHogs: hogs,
        filter: false,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogForm
          handleNameSort={this.nameSort}
          handleWeightSort={this.weightSort}
          handleGreasedFilter={this.greasedFilter}
        />
        <HogContainer hogs={this.state.allHogs} />
      </div>
    )
  }
}

export default App
