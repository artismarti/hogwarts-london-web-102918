import React, { Component } from 'react'

export default class HogTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogSpecialty: '',
      weight: '',
      greased: '',
      weightRatio: '',
      highestMedal: '',
      hideHog: '',
      showHogData: false,
    }
  }
  getHogImage = name => {
    return `${name.toLowerCase().replace(/ /g, '_')}.jpg`
  }
  handleClick = e => {
    if (!this.state.showHogData) {
      this.setState({
        hogSpecialty: this.props.hogData.specialty,
        weight: this.props.hogData.weight,
        greased: this.props.hogData.greased,
        weightRatio: this.props.hogData[
          'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        ],
        highestMedal: this.props.hogData['highest medal achieved'],
        showHogData: true,
      })
    } else {
      this.setState({
        hogSpecialty: '',
        weight: '',
        greased: '',
        weightRatio: '',
        highestMedal: '',
        showHogData: false,
      })
    }
  }
  handleHide = () => {
    this.setState({
      hideHog: 'none',
    })
  }
  render() {
    return (
      <div
        className="pigTile"
        style={{ display: this.state.hideHog }}
        onClick={this.handleClick}
      >
        <p className="smallHeader">{this.props.hogData.name}</p>
        <img
          src={`hog-imgs/${this.getHogImage(this.props.hogData.name)}`}
          alt=""
        />
        <p className="hoggyText">{this.state.hogSpecialty}</p>
        <p className="hoggyText">{this.state.weight}</p>
        <p className="hoggyText">{this.state.weightRatio}</p>
        <p className="achievementText hoggyText">{this.state.highestMedal}</p>
        <div>
          <button onClick={this.handleHide}>Hog Info</button>
        </div>
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
