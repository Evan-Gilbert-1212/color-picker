import React, { Component } from 'react'

export class ColorPicker extends Component {
  state = {
    Hue: Math.floor(Math.random() * 360),
    Saturation: Math.floor(Math.random() * 100),
    Light: Math.floor(Math.random() * 100),
    Alpha: 1,
  }

  updateHue = e => {
    this.setState({
      Hue: e.target.value,
    })
  }

  updateSaturation = e => {
    this.setState({
      Saturation: e.target.value,
    })
  }

  updateLight = e => {
    this.setState({
      Light: e.target.value,
    })
  }

  updateAlpha = e => {
    this.setState({
      Alpha: e.target.value,
    })
  }

  RandomColor = () => {
    this.setState({
      Hue: Math.floor(Math.random() * 360),
      Saturation: Math.floor(Math.random() * 100),
      Light: Math.floor(Math.random() * 100),
    })
  }

  render() {
    return (
      <main>
        <section className="color-section">
          <h2>Color</h2>
          <input
            className="current-color"
            style={{
              backgroundColor: `hsla(${this.state.Hue},
                                     ${this.state.Saturation}%,
                                     ${this.state.Light}%,
                                     ${this.state.Alpha}`,
            }}
          ></input>
          <input className="background-image"></input>
          <h4>{`hsla(${this.state.Hue}, ${this.state.Saturation}%, ${this.state.Light}%, ${this.state.Alpha})`}</h4>
          <button className="random-button" onClick={this.RandomColor}>
            Random Color
          </button>
        </section>
        <section className="color-selectors">
          <div className="color-sliders">
            <article>
              <h3>Hue</h3>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.Hue}
                className={'slider-Hue'}
                onChange={this.updateHue}
              ></input>
            </article>
            <article>
              <h3>Saturation</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.Saturation}
                className={'slider-Saturation'}
                onChange={this.updateSaturation}
              ></input>
            </article>
            <article>
              <h3>Light</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.Light}
                className={'slider-Light'}
                onChange={this.updateLight}
              ></input>
            </article>
            <article>
              <h3>Alpha</h3>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.Alpha}
                className={'slider-Alpha'}
                onChange={this.updateAlpha}
              ></input>
            </article>
          </div>
        </section>
      </main>
    )
  }
}

export default ColorPicker
