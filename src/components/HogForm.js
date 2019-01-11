import React, { Component } from 'react'

export default class HogForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.handleNameSort()}>Sort Name</button>
        <button onClick={() => this.props.handleWeightSort()}>
          Sort Weight
        </button>
        <button onClick={() => this.props.handleGreasedFilter()}>
          Greased?
        </button>
      </div>
    )
  }
}

//
// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }
