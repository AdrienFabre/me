import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class EventExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">Event Experience</h3>
        <div className="card">
          <ScrollableAnchor id={"EEX03"}>
            <div
              className={`title ${selectedSection === "EEX03" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EEX03")}
            >
              2016 - Present - Create Social Impact Led Design Thinking
              Workshops and Events.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EEX03" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  The purpose of those events is to create social impact, to
                  support social entrepreneurs and to raise awareness and
                  encourage action around different causes, notably food
                  sovereignty, refugee and education. The focus is to solve a
                  challenge while also educate participants about a cause and a
                  business theme. As Community Coordinator and Facilitator at
                  MakeSense, my role is to design, organise and facilitate those
                  events using design thinking methodologies; most of them are
                  workshops involving 20 participants during 3 hours.
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/food-glorious-food-reinventing-a-sustainable-food-system-tickets-26911792897?aff=eac2#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Food Glorious Food Festival
                  </a>
                  : The purpose of this event was to gather the food ecosystem
                  in one place for one day, food production, consumption,
                  distribution and recycling. The event took place in{" "}
                  <a
                    href="http://calthorpeproject.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calthorpe Project
                  </a>
                  , where the grow, cook and recycle food waste. This was a full
                  day event, from 9am to 9pm with up to 90 people and 200kg of
                  food surplus rescued. Here is the list of activities:
                </p>
                <ul>
                  <li>
                    Public debate about value of food with{" "}
                    <a
                      href="https://thefoodassembly.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Food Assembly
                    </a>
                    ,{" "}
                    <a
                      href="http://toogoodtogo.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Too Good To Go
                    </a>
                    ,{" "}
                    <a
                      href="https://olioex.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Olio
                    </a>
                    and{" "}
                    <a
                      href="http://www.soleshare.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SoleShare
                    </a>
                  </li>
                  <li>
                    3 Design thinking workshops Too Good To Go, BeEnriched,
                    EatClub
                  </li>
                  <li>Food digester showcase with Calthorpe Project</li>
                  <li>
                    Seminar about crowd funding with{" "}
                    <a
                      href="http://forwardfooding.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Crowdfooding
                    </a>
                  </li>
                  <li>
                    Cooking with food surplus with EatClub Other: Dye clothes
                    from food surplus,
                  </li>
                  <li>Create medicinal herbs, Yoga class</li>
                </ul>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/creativity-workshop-by-makesense-the-food-assembly-tickets-29051149771#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Food Assembly Design thinking workshop
                  </a>
                  : How to create flourishing communities in London?
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/creativity-workshop-by-makesense-the-calthorpe-project-tickets-26875937653#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calthorpe Project Design thinking workshop
                  </a>
                  : How to find a sustainable business model?
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/innovative-workshop-by-makesense-chocothon-tickets-29310729180#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chocothon Design thinking workshop
                  </a>
                  : How to enhance a crowdfunding campaign?
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/creativity-workshop-by-makesense-chatterbox-tickets-33638031257#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chatterbox Design thinking workshop
                  </a>
                  : How to create and ideal website experience user?
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/education-the-shift-from-now-to-where-we-want-to-be-tickets-36391657427#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Shift Design thinking workshop
                  </a>
                  : How to go from now to where we want to be?
                </p>
                <p>
                  <a
                    href="https://www.eventbrite.co.uk/e/creativity-workshop-green-is-the-new-black-tickets-94053004067"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Green is The New Black Design thinking workshop
                  </a>
                  : How to create behavior change for good?
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EEX02"}>
            <div
              className={`title ${selectedSection === "EEX02" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EEX02")}
            >
              2016 - Present - Other social impact events I supported.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EEX02" ? (
              <div className={`text show`}>
                {" "}
                <ul>
                  <li>
                    <a
                      href="https://www.socialenterprisefestival.london/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Social Impact Festival
                    </a>{" "}
                    organised by City University in London as a Speaker.
                  </li>
                  <li>
                    <a
                      href="http://my.qmul.ac.uk/news-and-events/events/careers--enterprise-the-east-london-social-hack.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The East London Social Hack
                    </a>{" "}
                    organised by Queen Mary University of London as a Mentor.
                  </li>
                  <li>
                    <a
                      href="http://beyondgoodbusiness.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Beyond Good Business
                    </a>{" "}
                    organised by Hatch Enterprise Incubator as a member of the
                    Newsroom Team.
                  </li>
                  <li>
                    <a
                      href="http://communities.techstars.com/uk/london/startup-weekend/12624"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Startup Weekend Health London
                    </a>{" "}
                    as a member of the Sponsorship Development Team.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EEX01"}>
            <div
              className={`title ${selectedSection === "EEX01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EEX01")}
            >
              2016 - Present - Hackathons I attended as a software developer.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EEX01" ? (
              <div className={`text show`}>
                {" "}
                <ul>
                  <li>
                    <a
                      href="https://hack-coworking-london.devpost.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hack Coworking London 2019
                    </a>{" "}
                    and created
                    <a
                      href="https://devpost.com/software/co-dash"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Co-Dash
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.tnvan.org/HappinessHack/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Happiness Hack 2019
                    </a>
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"EEX00"}>
            <div
              className={`title ${selectedSection === "EEX00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("EEX00")}
            >
              2018 - Senior Trainer - Freeformers and Facebook’s Community Boost
              EU program.
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "EEX00" ? (
              <div className={`text show`}>
                {" "}
                <ul>
                  <li>
                    Led 2 days training in Paris focused on training 30 trainers
                    to deliver workshops about Innovation, Web Presence, Social
                    Marketing and Cyber Security; as part of
                    <a
                      href="https://freeformers.com/blog/freeformers-partners-with-facebook-to-offer-training-to-300000-people/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook’s Community Boost EU program
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  <a
                    href="https://freeformers.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Freeformers
                  </a>
                  ' mission is to build a digital economy for all by creating
                  the future workforce, now. We accelerate digital adoption for
                  employees and customers to drive business growth.
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default EventExperience
