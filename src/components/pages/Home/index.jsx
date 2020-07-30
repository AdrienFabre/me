import React, { Component } from "react"
import Introduction from "../../box/Introduction/index"
import SoftwareDeveloper from "../../box/SoftwareDeveloper/index"
import Education from "../../box/Education/index"
import WorkExperience from "../../box/WorkExperience/index"
import EventExperience from "../../box/EventExperience/index"
import Recommendation from "../../box/Recommendation/index"
import Feedback from "../../box/Feedback/index"
// import Face from "../../../picture/Adrien-750x500.jpg"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: "",
    }
  }

  componentDidMount() {
    console.log("---Start componentDidMount---")
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
        {/* <img src={Face} /> */}

        <div className="topheader">Adrien Fabre</div>

        <SoftwareDeveloper />
        <Introduction
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <Education
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <WorkExperience
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <EventExperience
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <Recommendation
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <Feedback
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
        <div className="footer">{`Thank you for coming by.`}</div>
      </div>
    )
  }
}

export default Home

// const traverse = (obj) => {
//   if (((obj !== null) !== obj) !== "" && typeof obj == "object") {
//     Object.entries(obj).forEach(([key, value]) => {
//       ;<div key={key + 1}>{value} </div>
//       // key is either an array index or object key
//       traverse(value)
//     })
//   } else {
//     // obj is a number or string
//   }
// }
