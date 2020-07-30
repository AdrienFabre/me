import React, { Component } from "react"

class SoftwareDeveloper extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log("---Start componentDidMount---")
  }

  render() {
    return (
      <div>
        <div className="header">Software Developer</div>
        <p className="$text centered">
          <a
            href="https://github.com/AdrienFabre/CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub CV
          </a>
        </p>
      </div>
    )
  }
}

export default SoftwareDeveloper
