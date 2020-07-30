import React, { Component } from "react"

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log("---Start componentDidMount---")
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <div className="header">About</div>
        <div className="card">
          <div
            className={`title ${selectedSection === "INT01" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("INT01")}
          >
            Intro - Grow, collaborate, make the world a better place.
          </div>
          <div className={`text ${selectedSection === "INT01" && "show"}`}>
            <p>
              Making my way up from studying Vocational Electronics up to a
              Master in Business Engineering or exploring new technologies and
              languages(native French, conversational Russian), I constantly
              train my growth mindset.
            </p>
            <p>
              Being involved in entrepreneurship, social innovation, and
              education, I built strong analytical, collaborative and adaptive
              abilities. Evolving in the business and tech environments, I am an
              agile team player.
            </p>
            <p>
              Having just graduated from Makers Software Engineering Bootcamp, I
              am looking for a role where I can contribute to a culture of
              innovation, continuous progress and diversity, from where I can
              make the world a better place.
            </p>
          </div>
        </div>

        <div className="card">
          <div
            className={`title ${selectedSection === "INT00" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("INT00")}
          >
            Story - Curious, curious about myself, people and the world.
          </div>
          <div className={`text ${selectedSection === "INT00" && "show"}`}>
            <p>
              12 years ago, I was living in a small town in southern France,
              studying vocational electronics and working in food processing
              factories. I started noticing inconsistencies in life, I wanted to
              explore them, I pushed my own limits.
            </p>
            <p>
              I got a Master in Business Engineering, studied in India and
              Russia, learned languages, I experienced purchasing, sales and
              project management roles. I was inspired by individuals using
              entrepreneurship and design thinking to do social good.
            </p>
            <p>
              For the past 3 years, I have been exploring the social innovation
              ecosystem in London, meeting hundreds of social entrepreneurs,
              watching hundreds of ted talks and attending hundreds of events. I
              created and facilitated my own events focused on cultivating
              social impact leadership.
            </p>
            <p>
              My curiosity became a drive, finding the best role to grow,
              collaborate and create social impact efficiently. Now, focusing on
              gathering my skills and passion for excelling in software
              engineering.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
