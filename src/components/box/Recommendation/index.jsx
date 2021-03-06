import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class Recommendation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">Recommendation</h3>
        <div className="card">
          <ScrollableAnchor id={"REC05"}>
            <div
              className={`title ${selectedSection === "REC05" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC05")}
            >
              {" "}
              Alfredo Belfiori - Co-Founder and CTO at BetterSpace
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC05" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/alfredobelfiori/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alfredo Belfiori
                  </a>
                </p>
                <p>
                  "Adrien is a beautiful person to work with. He is active and
                  enthusiastic, eager to learn and work on his tasks and always
                  happy to help other people on any other kind of job. We've
                  always assigned him very difficult jobs and he takes complete
                  ownership over them. He doesn't get satisfied until his
                  project works well."
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"REC04"}>
            <div
              className={`title ${selectedSection === "REC04" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC04")}
            >
              {" "}
              James Alexander Lee - Software Developer at BetterSpace with a PhD
              in Digital Arts
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC04" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/jamesl1001/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    James Alexander Lee
                  </a>
                </p>
                <p>
                  "Adrien is approachable, dedicated and enthusiastic and has a
                  wide array of interests and passions which are valuable to any
                  future employer. Adrien and I both joined BetterSpace at the
                  same time and have worked together for the past 8 months.
                  During his time with BetterSpace, Adrien quickly picked up new
                  skills with React and AWS and put them to good use in various
                  projects, mostly involving internal tools.
                </p>
                <p>
                  {" "}
                  These projects involved image compression, API automated
                  testing, translating data between Airtable and Dynamo and
                  building a brand new tool for the purpose of reconciling
                  transactional data between our own database and Xero - not an
                  easy feat! Especially during the latter project, in addition
                  to the technical improvements, Adrien gained experience in
                  wireframing, UI and UX design, collating complex requirements
                  from various stakeholders and managing and taking ownership of
                  the project.
                </p>
                <p>
                  {" "}
                  Adrien is very enthusiastic to learn new things and improve
                  his existing knowledge. He is extremely passionate about "tech
                  for good" and always brings new ideas to the table. Adrien's
                  time at BetterSpace has been invaluable for improving the
                  team's workflow and I wish him all the best for his future!"
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"REC03"}>
            <div
              className={`title ${selectedSection === "REC03" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC03")}
            >
              {" "}
              Rohan Mehta - Community Builder, Workshop Facilitator, Creative
              Problem Solver
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC03" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/rohan-m/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rohan Mehta
                  </a>
                </p>
                <p>
                  “MakeSense is an open source volunteer-driven network creating
                  events to support social entrepreneurs. Ever since Adrien
                  first attended one of our events he was extremely enthusiastic
                  and connected with our values.
                </p>
                <p>
                  Very soon after attending his first event he was eager to jump
                  on board and learn how to facilitate one of our workshops. By
                  conducting these workshops he got to deeply understand several
                  social entrepreneurs and help them figure out how to improve
                  their business. He did these extremely well and soon became
                  part of the core team. 6 months after he attended his first
                  MakeSense workshop Adrien was the lead in organising a
                  large-scale event “Food Glorious Food” tackling food waste
                  with a full day event with workshops, activities, and talks
                  featuring 12 different social entrepreneurs in the food
                  sustainability sector. Adrien found the venue, negotiated
                  using it for free, came up with the concept, created the
                  marketing materials and was directing 6 other volunteers to
                  pull off a really successful event.
                </p>
                <p>
                  Adrien demonstrates a really strong work ethic. If he says he
                  will do something he will go to great lengths to make sure it
                  gets done. I have also found that he learns very quickly. If
                  he is interested in something he will dive head first into it,
                  contacting people to talk to and create opportunities to learn
                  as much as he can by doing. He is a self-starter and very good
                  at finding ways to improve the ways we work together. I have
                  been very privileged to work with him over the last 18 months
                  and know that wherever he goes next he will be focused,
                  determined and a powerful asset to the business.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"REC02"}>
            <div
              className={`title ${selectedSection === "REC02" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC02")}
            >
              {" "}
              Gianpietro Pucciariello - Facilitator, AppyMaps Co-Founder, Board
              Member at makesense
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC02" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/hellogp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gianpietro Pucciariello
                  </a>
                </p>
                <p>
                  “I am more than pleased to provide the highest recommendation
                  to Adrien, whom I have known as a coworker for the period
                  between January 2016 and December 2017 at Makesense London.
                </p>
                <p>
                  Since his first day and during all the period we worked
                  together, Adrien showed a really strong work ethic and
                  commitment to the organisation's values. If Adrien commits to
                  something he will do his absolute best to get the results and
                  get it done properly. He learns quickly about the working
                  environment, for every work we did, he highly contributed. He
                  always follows the instructions carefully, if he is in
                  difficulty he would always reflect and evaluate the tasks to
                  understand how he could achieve it alone before asking for
                  help. Adrien is always eager to learn, a proper problem solver
                  and incredibly adaptive. He has the gift to ask questions that
                  help the team to reflect and learn together.
                </p>
                <p>
                  In each design thinking workshop we facilitated, he shined for
                  teamwork, ethics and energy. He has a very open, enthusiastic
                  and dynamic facilitation style, he is also very attentive to
                  the process and the people. Among all the good memories, I
                  remember how Adrien successfully led 10 volunteers in the
                  Makesense London event of September 2016 where we designed a
                  day-long Festival about Food Security/Food Sovereignty called
                  "Food Glorious Food". We engaged 100+ participants, 15 guests
                  in sustainable/green-themed activities, holistic seminars and
                  creative thinking workshops with startups.
                </p>
                <p>
                  I am looking forward to working again with him in the future.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"REC01"}>
            <div
              className={`title ${selectedSection === "REC01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC01")}
            >
              Mursal Hedayat - CEO at Chatterbox, FounderForbes 30 Under 30
              Social Entrepreneur
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC01" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/mursalhedayat/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mursal Hedayat
                  </a>
                </p>
                <p>
                  “It was delightful working with Adrien. He produced a highly
                  engaging and well attended MakeSense workshop for Chatterbox
                  in very little time. He was very attentive to our needs and
                  delivered outputs that far exceeded our expectations. I would
                  highly recommend him.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"REC00"}>
            <div
              className={`title ${selectedSection === "REC00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("REC00")}
            >
              Michael Graham - Sales Expert, MJB, Director of Entrepreneurship
              at Genisys (Charity)
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "REC00" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/michael-graham-97486854"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Michael Graham
                  </a>
                </p>
                <p>
                  “Adrien is a great asset to any team in a business
                  environment. He has an incredible work ethic blended with a
                  great student mentality. During his time at MJB he proved
                  himself to be a fast learner and demonstrated a willingness to
                  continuously go the extra mile to generate results. He
                  developed his sales and business development skills massively
                  whilst at MJB and I’m glad to say that he was a pleasure to
                  work with.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Recommendation
