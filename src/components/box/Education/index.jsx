import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">Education</h3>
        <div className="card">
          <ScrollableAnchor id={"EDU04"}>
            <div
              className={`title ${selectedSection === "EDU04" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EDU04")}
            >
              2019 - 200h Yoga Teacher Training Course Mathatitu Yoga Ashram.
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EDU04" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://mathatituyogaashram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mathatitu Yoga Ashram
                  </a>{" "}
                  is{" "}
                  <a
                    href="https://www.yogaalliance.org/SchoolPublicProfile?sid=7174&lid=8675"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yoga Alliance RYS approved
                  </a>{" "}
                  in Varkala, Kerala, India.
                </p>
                <ul>
                  <li>
                    200h – 22 days Yoga Teacher Training Course Syllabus – 50%
                    Hatha – 50% Ashtanga.
                  </li>
                  <li>
                    Words of the teacher: ” I love your dedication and self
                    discipline”.
                  </li>
                  <li>
                    Words of a student: "Just a note to say thank you again for
                    last night! I felt super relaxed (& tired 😂) after the yoga
                    class. Would definitely attend your classes :)".
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EDU03"}>
            <div
              className={`title ${selectedSection === "EDU03" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EDU03")}
            >
              2016 - 2018 - Explore and Prototype on "How to cultivate social
              impact leadership?"
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EDU03" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.enrolyourself.com/learning-marathon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enrol Yourself Learning Marathon
                  </a>{" "}
                  is a peer-led learning accelerator, I focused on answering the
                  question: “How to cultivate social impact leadership?”.
                </p>
                <p>
                  <a
                    href="https://courses.edx.org/courses/course-v1:MITx+15.671.1x+3T2016/38aa2c110ece40248f278ec76784a17c/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    u.lab: Leading From the Emerging Future
                  </a>{" "}
                  is an introduction to leading profound social, environmental
                  and personal transformation using experiential learning.
                  Co-initiated over the past two decades by action researchers
                  at MIT and the Presencing Institute, the u.lab for systems
                  leadership enables leaders to address the deeper sources of
                  today’s complex societal challenges.
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EDU02"}>
            <div
              className={`title ${selectedSection === "EDU02" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EDU02")}
            >
              2010 - 2013 - MSc Business Engineering - Entrepreneurial -
              International.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EDU02" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  Master of Science in Business Engineering at{" "}
                  <a
                    href="https://student.kedge.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KEDGE Business School
                  </a>
                  – Toulon, France
                </p>
                <ul>
                  <li>
                    Wrote a thesis on “How Buyers can engage all stakeholders
                    from the research and development stage to improve
                    companies’ performance by leading the design and
                    implementation of collaborative tools”.
                  </li>
                  <li>
                    Studied project and innovation management, purchasing,
                    strategy, marketing B2B and solution selling.
                  </li>
                  <li>
                    Sold and implemented marketing services to SMEs at the most
                    awarded Junior Enterprise in Europe, Marketing Méditerranée.
                  </li>
                  <li>
                    Completed international business programmes at{" "}
                    <a
                      href="http://eng.rea.ru/Home/Post/34"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Plekhanov
                    </a>{" "}
                    University in Moscow and at{" "}
                    <a
                      href="https://www.bimtech.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BIMTech University
                    </a>{" "}
                    in New Delhi.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EDU01"}>
            <div
              className={`title ${selectedSection === "EDU01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EDU01")}
            >
              2008 - 2010 - HND Industrial Maintenance - Vocational Electronics.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EDU01" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  BTEC Higher National Diploma of Industrial Maintenance –{" "}
                  <a
                    href="https://www.univ-perp.fr/en/discover-the-upvd-1824.kjsp?RH=UPVD-FR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Institute of Technology
                  </a>{" "}
                  – Perpignan, France
                </p>
                <ul>
                  <li>
                    Renewable energy: powered a streetlight using a wind turbine
                    and solar panels.
                  </li>
                  <li>
                    Electronics: analysed and set up electronic systems for
                    railway networks.
                  </li>
                  <li>
                    Aeronautics: assisted in maintenance operations on
                    helicopters.
                  </li>
                </ul>
                <p>
                  Previous Diplomas: BTEC National Diploma of Electronics
                  (2006-2008) and BTEC First Diploma of Electronics (2004-2006)
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EDU00"}>
            <div
              className={`title ${selectedSection === "EDU00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EDU00")}
            >
              Leisure activities - Joyful discipline - Personal development -
              Other contributions.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EDU00" ? (
              <div className={`text show`}>
                {" "}
                <ul>
                  <li>
                    Chasing social innovations – Reading, meeting and
                    collaborating with inspiring individuals.
                  </li>
                  <li>
                    Swimming – Exploring mind and body abilities to coordinate
                    with or without air.
                  </li>
                  <li>
                    Hiking – Exploring nature, sensing textures and smells,
                    observing of the tiny and the huge.
                  </li>
                  <li>
                    Meditating – Breathing , listening silence, cultivating
                    wisdom, traveling in time and space.
                  </li>
                  <li>
                    Continuously improve my{" "}
                    <a
                      href="https://attitude-michele-joel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      parent’s hairdressing salon website
                    </a>
                    (WP.org) and digital presence.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Education
