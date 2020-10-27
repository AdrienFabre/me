import React, { Component } from "react"
import About from "../../box/About/index"
import SoftwareDeveloper from "../../box/SoftwareDeveloper/index"
import Education from "../../box/Education/index"
import WorkExperience from "../../box/WorkExperience/index"
import EventExperience from "../../box/EventExperience/index"
import Recommendation from "../../box/Recommendation/index"
import Feedback from "../../box/Feedback/index"
import Face from "../../../picture/Adrien-750x500.jpg"
import ArrowUp from "../../../picture/arrow-up.png"
import ArrowDown from "../../../picture/arrow-down.png"

import { goToAnchor, configureAnchors } from "react-scrollable-anchor"

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -80, scrollDuration: 500 })

const ALLSECTIONS = [
  "PRO03",
  "PRO02",
  "PRO01",
  "PRO00",
  "INT01",
  "INT00",
  "WEX06",
  "WEX05",
  "WEX04",
  "WEX03",
  "WEX02",
  "WEX01",
  "WEX00",
  "EDU04",
  "EDU03",
  "EDU02",
  "EDU01",
  "EDU00",
  "EEX03",
  "EEX02",
  "EEX01",
  "EEX00",
  "REC05",
  "REC04",
  "REC03",
  "REC02",
  "REC01",
  "REC00",
  "FEE11",
  "FEE10",
  "FEE09",
  "FEE08",
  "FEE07",
  "FEE06",
  "FEE05",
  "FEE04",
  "FEE03",
  "FEE02",
  "FEE01",
  "FEE00",
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSection: "",
      height: "auto",
    }
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown)

    let url = window.location.href
    let param = url.substring(url.lastIndexOf("#") + 1)

    if (ALLSECTIONS.includes(param)) {
      this.updateSelectedSection(param)
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    const { selectedSection } = this.state
    let newSelectedSection = selectedSection

    if (event.which === 75) { // letter K
      if (ALLSECTIONS.indexOf(selectedSection) === 0) {
        newSelectedSection = ALLSECTIONS[ALLSECTIONS.length - 1]
      } else {
        newSelectedSection =
          ALLSECTIONS[ALLSECTIONS.indexOf(selectedSection) - 1] || ALLSECTIONS[0]
      }
      this.updateSelectedSection(newSelectedSection)
    } else if (event.which === 74) { // letter J
      if (ALLSECTIONS.indexOf(selectedSection) === ALLSECTIONS.length - 1) {
        newSelectedSection = ALLSECTIONS[0]
      } else {
        newSelectedSection =
          ALLSECTIONS[ALLSECTIONS.indexOf(selectedSection) + 1]
      }
      this.updateSelectedSection(newSelectedSection)
    }
  }

  animate = () => {
    this.setState((state) => ({ height: state.height === 233 ? 38 : 233 }))
  }

  updateSelectedSection = (section) => {
    let { selectedSection } = this.state
    console.log("section", section)
    console.log("selectedSection", selectedSection)

    if (section === selectedSection) {
      this.setState({ selectedSection: "" })
    } else {
      setTimeout(() => {
        goToAnchor(section, true)
      }, 400)
      this.setState({ selectedSection: section })
    }
    console.log("section", section)
    console.log("selectedSection", selectedSection)
  }

  renderscrollinstructions = (likes) => {
    return (
      <div id='scrollinstructions'>
      <div className='scrollbutton2'>
        K
        <img className='arrow' src={ArrowUp} alt="ArrowDown" />
      </div>
      <div className='scrollbutton1'>
        J
        <img className='arrow' src={ArrowDown} alt="ArrowDown" />
      </div>
    </div>
    )
  }


  render() {
    let { selectedSection } = this.state
    return (
      <div id="homepage">
        <img src={Face} alt="Face" />
       {this.renderscrollinstructions()}``
        <h1 className="topheader">Adrien Fabre</h1>
        <SoftwareDeveloper
          updateSelectedSection={this.updateSelectedSection}
          selectedSection={selectedSection}
        />
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
