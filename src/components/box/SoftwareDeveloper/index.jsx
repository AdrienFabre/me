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
            href="https://drive.google.com/file/d/1xJVfeiGLdYs6r6FE3X65TcDWORSQi1H6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF CV
          </a>
          <> - </>
          <a
            href="https://github.com/AdrienFabre/CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub CV
          </a>
          <br />
          <button onClick={() => this.props.updateSelectedSection("WEX05")}>
            Full Stack Experience
          </button>
        </p>
      </div>
    )
  }
}

export default SoftwareDeveloper
