import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class SoftwareDeveloper extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h2 className="centered"> Software Engineer</h2>
        <h3 className="centered">Tech for good</h3>
        <h3 className="centered">
          AWS - Serverless - NodeJS - ReactJS - Rails
        </h3>
        <p className="$text centered">
          <a
            href="https://drive.google.com/file/d/1mBnm9s7lGX96F0HrafaowHC4vIDBZ0eq/view?usp=sharing"
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
          <> - </>
          <a
            href="https://www.linkedin.com/in/adrienfabre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>

        <h3 className="header">Projects</h3>

        <div className="card">
          <ScrollableAnchor id={"PRO03"}>
            <div
              className={`title ${selectedSection === "PRO03" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("PRO03")}
            >
              Full Stack (AWS - Serverless - NodeJs - React - Xero API - Rails)
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "PRO03" ? (
              <div className={`text show`}>
                <ul>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/Reconciliation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reconciliation
                    </a>
                    : Designed and created entirely an internal tool to
                    facilitate reconciliation between bank transactions from
                    Xero API and transactions from the database, collaborating
                    with accountant and the reconciliation team.
                  </li>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/testApi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TestApi
                    </a>
                    : Created an internal tool to test all our API and databases
                    and find errors easily.
                  </li>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/articles-rails-react"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sharing App
                    </a>
                    : Created a minimalist Rails and React app where global user
                    can like articles.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"PRO02"}>
            <div
              className={`title ${selectedSection === "PRO02" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("PRO02")}
            >
              Back End (AWS - Serverless - NodeJs)
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "PRO02" ? (
              <div className={`text show`}>
                <ul>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/resizeImages"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resizer
                    </a>
                    : Created a mircoservice to resize and save to S3 all
                    pictures from external links.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"PRO01"}>
            <div
              className={`title ${selectedSection === "PRO01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("PRO01")}
            >
              Front End (ReactJs - Airtable API)
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "PRO01" ? (
              <div className={`text show`}>
                <ul>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/AirtableToDynamo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Airtable
                    </a>
                    : Improved an internal tool to update resources DynamoDB
                    from Airtable API.
                  </li>
                  <li>
                    Fulfilment process: Adapted UI and process to the users
                    using API endpoints, increased speed and ease.
                  </li>

                  <li>
                    <a
                      href="https://github.com/AdrienFabre/me"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adrienfabre.dev
                    </a>
                    : Created a simple static React website hosted on GitHub.
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"PRO00"}>
            <div
              className={`title ${selectedSection === "PRO00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("PRO00")}
            >
              Bootcamp challenges (Ruby - Rails - RSpec - Cypress - Firebase -
              NodeJS - Jest - React JS)
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "PRO00" ? (
              <div className={`text show`}>
                <p>
                  Those challenges focused on learning to learn fast and
                  collaborate efficiently.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://github.com/what-zen/what-zen-app"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Minimalist Trello with a chat
                    </a>{" "}
                    (React - Firebase database and authentication - Cypress)
                    <ul>
                      <li>
                        Facilitated SCRUM ceremonies as a servant leader, using
                        white board to co-define and prioritize tickets
                      </li>
                      <li>
                        Implemented the whole Card system, from UI, user input
                        to React components to data-storage and UX
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://github.com/simian-sinister/Acebook-Simian-Sinister"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Minimalist Facebook wall
                    </a>{" "}
                    (Ruby-on-Rails - PostgreSQL - RSpec)
                  </li>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/Simple-Vision-Board"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Simple Vision Board
                    </a>{" "}
                    (Vue - Cypress - Express - NodeJS - MongoDB Atlas)
                  </li>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/bank_tech_test_ruby"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bank
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/picture-picker"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Picture picker
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/vending-machine"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Vending machine
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/takeaway-challenge-ruby"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Takeaway
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/url-shortener"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      URL Shortener
                    </a>{" "}
                    (Ruby - RSpec - Rails)
                  </li>
                  <li>
                    <a
                      href="https://github.com/AdrienFabre/bowling-typescript"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bowling
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/airport_challenge_js"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Airport
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/robotic-hoover"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Robotic hoover
                    </a>{" "}
                    -{" "}
                    <a
                      href="https://github.com/AdrienFabre/React-SWAPI-API"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      SWAPI
                    </a>{" "}
                    (TypeScript - JavaScript - Jasmine Jest)
                  </li>
                </ul>
                <p>
                  Further learning:{" "}
                  <a
                    href="https://github.com/AdrienFabre/makers_coding_bootcamp_portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Makers Portfolio
                  </a>{" "}
                  -{" "}
                  <a
                    href="https://www.codewars.com/users/AdrienFabre"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Codewars
                  </a>{" "}
                  -{" "}
                  <a
                    href="https://exercism.io/profiles/AdrienFabre"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Exercism
                  </a>{" "}
                  -{" "}
                  <a
                    href="https://www.codecademy.com/AdrienFabre"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Codeacademy
                  </a>{" "}
                  -{" "}
                  <a
                    href="https://www.sololearn.com/Profile/5164575"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sololearn
                  </a>
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default SoftwareDeveloper
