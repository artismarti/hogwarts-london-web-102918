import React, { Component } from 'react'

import HogTile from './HogTile'

export default class HogContainer extends Component {
  render() {
    return (
      <div>
        {this.props.hogs.map((hog, index) => (
          <HogTile
            key={index}
            hogData={hog}
            handleNameSort={this.props.nameSort}
            handleWeightSort={this.props.weightSort}
            handleGreasedFilter={this.props.greasedFilter}
          />
        ))}
      </div>
    )
  }
}
