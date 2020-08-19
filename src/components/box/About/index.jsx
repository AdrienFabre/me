import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">About</h3>

        <div className="card">
          <ScrollableAnchor id={"INT01"}>
            <div
              className={`title ${selectedSection === "INT01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("INT01")}
            >
              Intro - Grow, collaborate, make the world a better place.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "INT01" ? (
              <div className={`text show`}>
                <p>
                  Making my way up from studying Vocational Electronics up to a
                  Master in Business Engineering or exploring new technologies
                  and languages (native French, conversational Russian), I
                  constantly train my growth mindset.
                </p>
                <p>
                  Being involved in entrepreneurship, social innovation, and
                  education, I built strong analytical, collaborative and
                  adaptive abilities. Evolving in the business and tech
                  environments, I am an agile team player.
                </p>
                <p>
                  Graduated from Makers software engineering bootcamp, worked
                  full-stack at the growing startup BetterSpace, I am looking
                  for a role where I can contribute to a culture of innovation,
                  continuous progress and diversity, to create high quality
                  software and social impact.
                </p>
                <p>
                  Read more about{" "}
                  <a
                    href="https://medium.com/@AdrienFabre/journey-to-coding-why-a094a4e06541"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Why Software Engineering
                  </a>
                  <> and </>
                  <a
                    href="https://blog.makersacademy.com/journey-to-coding-makers-d0e3fc97059f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Why Makers Bootcamp
                  </a>
                  .
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"INT00"}>
            <div
              className={`title ${selectedSection === "INT00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("INT00")}
            >
              Story - Curious, curious about myself, people and the world.
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "INT00" ? (
              <div className={`text show`}>
                <p>
                  12 years ago, I was living in a small town in southern France,
                  studying vocational electronics and working in food processing
                  factories. I started noticing inconsistencies in life, I
                  wanted to explore them, I pushed my own limits.
                </p>
                <p>
                  I got a Master in Business Engineering, studied in India and
                  Russia, learned languages, I experienced purchasing, sales and
                  project management roles. I was inspired by individuals using
                  entrepreneurship and design thinking to do social good.
                </p>
                <p>
                  For the past 3 years, I have been exploring the social
                  innovation ecosystem in London, meeting hundreds of social
                  entrepreneurs, watching hundreds of ted talks and attending
                  hundreds of events. I created and facilitated my own events
                  focused on cultivating social impact leadership.
                </p>
                <p>
                  My curiosity became a drive, finding the best role to grow,
                  collaborate and create social impact efficiently. Now,
                  focusing on gathering my skills and passion for excelling in
                  software engineering.
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default About
