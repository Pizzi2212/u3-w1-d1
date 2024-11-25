import { Component } from 'react'

class Img extends Component {
  render() {
    return (
      <section>
        <h2>Quanto sei bona Robin</h2>
        <img src={this.props.src} alt="img" />
      </section>
    )
  }
}

export default Img
