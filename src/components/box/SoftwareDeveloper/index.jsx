import React, { Component } from "react"

class SoftwareDeveloper extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2 className="header">Software Engineer</h2>
        <h3 className="centered">AWS - Serverless - NodeJS - React JS</h3>
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
