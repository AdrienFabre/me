import React, { Component } from "react"
import About from "../../box/About/index"
import SoftwareDeveloper from "../../box/SoftwareDeveloper/index"
import Education from "../../box/Education/index"
import WorkExperience from "../../box/WorkExperience/index"
import EventExperience from "../../box/EventExperience/index"
import Recommendation from "../../box/Recommendation/index"
import Feedback from "../../box/Feedback/index"
import Face from "../../../picture/Adrien-750x500.jpg"
import ScrollableAnchor from "react-scrollable-anchor"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: "INT01",
    }
  }

  updateSelectedSection = (section) => {
    let { selectedSection } = this.state
    if (section === selectedSection) this.setState({ selectedSection: "" })
    else this.setState({ selectedSection: section })
  }

  render() {
    let { selectedSection } = this.state
    console.log(this.state)
    return (
      <div>
        <img src={Face} alt="" />
        <h1 className="topheader">Adrien Fabre</h1>
        <SoftwareDeveloper updateSelectedSection={this.updateSelectedSection} />

        <About
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />

        <WorkExperience
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <Education
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <EventExperience
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <ScrollableAnchor id={"recommendation"}>
          <Recommendation
            updateSelectedSection={this.updateSelectedSection}
            selectedSection={selectedSection}
          />
        </ScrollableAnchor>

        <ScrollableAnchor id={"feedback"}>
          <Feedback
            updateSelectedSection={this.updateSelectedSection}
            selectedSection={selectedSection}
          />
        </ScrollableAnchor>

        <div className="footer">{`Thank you for coming by.`}</div>
      </div>
    )
  }
}

export default Home
