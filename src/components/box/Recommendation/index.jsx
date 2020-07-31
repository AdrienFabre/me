import React, { Component } from "react"

class Recommendation extends Component {
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
        <h3 className="header">Recommendation</h3>
        <div className="card">
          <div
            className={`title ${selectedSection === "REC02" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("REC02")}
          >
            {" "}
            Rohan Mehta, Community Builder| Workshop Facilitator| Creative
            Problem Solver
          </div>
          <div className={`text ${selectedSection === "REC02" && "show"}`}>
            <p>
              <a
                href="https://www.linkedin.com/in/rohan-m/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rohan Mehta
              </a>
              : “MakeSense is an open source volunteer-driven network creating
              events to support social entrepreneurs. Ever since Adrien first
              attended one of our events he was extremely enthusiastic and
              connected with our values.
            </p>
            <p>
              Very soon after attending his first event he was eager to jump on
              board and learn how to facilitate one of our workshops. By
              conducting these workshops he got to deeply understand several
              social entrepreneurs and help them figure out how to improve their
              business. He did these extremely well and soon became part of the
              core team. 6 months after he attended his first MakeSense workshop
              Adrien was the lead in organising a large-scale event “Food
              Glorious Food” tackling food waste with a full day event with
              workshops, activities, and talks featuring 12 different social
              entrepreneurs in the food sustainability sector. Adrien found the
              venue, negotiated using it for free, came up with the concept,
              created the marketing materials and was directing 6 other
              volunteers to pull off a really successful event.
            </p>
            <p>
              Adrien demonstrates a really strong work ethic. If he says he will
              do something he will go to great lengths to make sure it gets
              done. I have also found that he learns very quickly. If he is
              interested in something he will dive head first into it,
              contacting people to talk to and create opportunities to learn as
              much as he can by doing. He is a self-starter and very good at
              finding ways to improve the ways we work together. I have been
              very privileged to work with him over the last 18 months and know
              that wherever he goes next he will be focused, determined and a
              powerful asset to the business.”
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "REC01" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("REC01")}
          >
            Mursal Hedayat, CEO at Chatterbox, FounderForbes 30 Under 30 Social
            Entrepreneur
          </div>
          <div className={`text ${selectedSection === "REC01" && "show"}`}>
            <p>
              <a
                href="https://www.linkedin.com/in/mursalhedayat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mursal Hedayat
              </a>
              : “It was a delightful working with Adrien. He produced a highly
              engaging and well attended MakeSense workshop for Chatterbox in
              very little time. He was very attentive to our needs and delivered
              outputs that far exceeded our expectations. I would highly
              recommend him.”
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "REC00" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("REC00")}
          >
            Michael Graham, Sales Expert, MJB, Director of Entrepreneurship at
            Genisys (Charity)
          </div>
          <div className={`text ${selectedSection === "REC00" && "show"}`}>
            <p>
              <a
                href="https://www.linkedin.com/in/michael-graham-97486854"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael Graham
              </a>
              : “Adrien is a great asset to any team in a business environment.
              He has an incredible work ethic blended with a great student
              mentality. During his time at MJB he proved himself to be a fast
              learner and demonstrated a willingness to continuously go the
              extra mile to generate results. He developed his sales and
              business development skills massively whilst at MJB and I’m glad
              to say that he was a pleasure to work with.”
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Recommendation
