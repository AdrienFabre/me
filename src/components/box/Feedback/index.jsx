import React, { Component } from "react"
import ScrollableAnchor from "react-scrollable-anchor"
import { VelocityTransitionGroup } from "velocity-react"

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">Feedback</h3>
        <div className="card">
          <ScrollableAnchor id={"FEE11"}>
            <div
              className={`title ${selectedSection === "FEE11" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE11")}
            >
              Sam Morgan - Makers Software Engineering Bootcamp Head of
              Education - April 30th 2019
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE11" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/morgansamuel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sam Morgan
                  </a>{" "}
                </p>
                <p>
                  “A great review. You program fast and fluidly, move quickly
                  around the process, and have inventive and thoughtful
                  approaches to solving tough problems. Really impressive – do
                  check the specific feedback below for more :)”
                </p>
                <ul>
                  <li>
                    <p> can TDD anything:</p>
                    <p>
                      "I liked that your first test was essentially an
                      expression of a working program. However, I might consider
                      moving in smaller steps by constraining the problem – for
                      instance, starting only with input frequencies divided by
                      ve, or using a step of 1. This would allow you to start
                      providing value sooner with working test cases. I really,
                      really liked how you split out your test into actual and
                      expected variables – this made your test extremely easy to
                      read. I gave you a twist performance test, and you came up
                      with a really good way to do this kind of benchmarking."
                    </p>
                  </li>
                  <li>
                    <p>I can program fluently:</p>
                    <p>
                      "You moved quickly around the command-line to get set up.
                      You were comfortable with Ruby, using effective Ruby
                      idioms to write the test and the associated method. The
                      solution you came up with to the problem – adding the
                      result of the modulus – was very intuitive and impressive.
                      I hadn’t thought of solving the problem like that."
                    </p>
                  </li>
                  <li>
                    <p>I can debug anything:</p>
                    <p>
                      "You hit a problem with a typo, then used the command-line
                      to identify and fix that problem in short order. I got a
                      strong sense that when you were in “debugging mode”, you
                      took time and space to solve the problem."
                    </p>
                  </li>
                  <li>
                    <p>I can model anything:</p>
                    <p>
                      "You spent some time trying to get a clear picture of the
                      input and the output, along with the data structure.
                      However, it can be a good idea to ask for these things
                      directly from the user – OK, what’s the input(s)? What
                      data structure? What’s the output? What data structure?"
                    </p>
                  </li>
                  <li>
                    <p>I can refactor anything:</p>
                    <p>
                      "It was interesting that you moved on to adding the step
                      without taking a break to refactor the code you had
                      already written (for example, you retained an each loop
                      that probably should have been a map)."
                    </p>
                  </li>
                  <li>
                    <p>I have a methodical approach to solving problems:</p>
                    <p>
                      "You followed the dev process effectively, starting with
                      eliciting requirements, modelling, driving a test,
                      implementing a solution, and so on. It felt very
                      methodical indeed."
                    </p>
                  </li>
                  <li>
                    <p>I use an Agile product development process:</p>
                    <p>
                      "You asked good questions at the beginning to try and
                      identify the problem. However, the test case you wrote was
                      quite a big “chunk” to move in – I wonder whether breaking
                      it up into smaller steps towards the “chunk” would be a
                      better approach (see TDD for more on this)."
                    </p>
                  </li>
                  <li>
                    <p>I can TDD anything:</p>
                    <p>
                      "I liked that your first test was essentially an
                      expression of a working program. However, I might consider
                      moving in smaller steps by constraining the problem – for
                      instance, starting only with input frequencies divided by
                      ve, or using a step of 1. This would allow you to start
                      providing value sooner with working test cases. I really,
                      really liked how you split out your test into actual and
                      expected variables – this made your test extremely easy to
                      read. I gave you a twist performance test, and you came up
                      with a really good way to do this kind of benchmarking."
                    </p>
                  </li>
                  <li>
                    <p>I write code that is easy to change:</p>
                    <p>
                      "It was really good that you spent time thinking about
                      your test structure to make it readable, including the
                      creation of variables with good names to make it clear
                      what the input and outputs were. "
                    </p>
                  </li>
                  <li>
                    <p>I can justify the way I work:</p>
                    <p>
                      "You gave a solid justification for using a simple
                      implementation and proposed a step forward – that you’d
                      write this simple version and agree on a step forward. I
                      felt very bought-in to this process."
                    </p>
                  </li>
                </ul>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"FEE10"}>
            <div
              className={`title ${selectedSection === "FEE10" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE10")}
            >
              Clare Pinder - Software Engineer at ThoughtWorks
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE10" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/clare-pinder-95501957/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clare Pinder
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Adrien set out a clear plan for program – to follow the
                  ‘criteria tests’ as feature tests. Where the code was behaving
                  unexpectedly, he read the error message quickly to locate
                  where the issue remained and he studied the code carefully and
                  sought visibility by printing some choice lines to the
                  console. He remained calm and only fixed the error when he
                  knew the problem – he didn’t ‘shoot around in the dark’.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE09"}>
            <div
              className={`title ${selectedSection === "FEE09" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE09")}
            >
              Ellie Turnock - Software Engineer at Jigsaw XYZ
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE09" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/ellie-turnock/?originalSubdomain=uk"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ellie Turnock
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Your process is very strong, you know what to do next, doing
                  the Feature Test and then the Unit Test. You do not hesitate
                  to modify namings and refactor your tests along you are
                  writing the code. Finally, you communicate on what you are
                  doing and it makes sense, meaning that the process and its
                  implementation is very clear in your head, that was also very
                  helpful to follow your thoughts.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE08"}>
            <div
              className={`title ${selectedSection === "FEE08" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE08")}
            >
              Krzysztof Balejko - Software Engineer at Alfa Financial Software
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE08" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/krzysztof-balejko-84a214186/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Krzysztof Balejko
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Adrien starts each of his projects with careful planing and I
                  was invited to join in before both bowling and front-end API
                  challenges. During the process Adrien has demonstrated his
                  abilities of modelling user interaction. We have used Realtime
                  Time Board during both sessions for diagraming and general
                  brainstorming. I would very happily work with him again!”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE07"}>
            <div
              className={`title ${selectedSection === "FEE07" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE07")}
            >
              Dan Groze - Software Engineer at Sainsbury's
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE07" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/dan-groze-33a968184/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dan Groze
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “I like that you always start tackling a problem with lots of
                  planning, you are a master at diagramming and modelling. This
                  helped all our team during our final project to understand our
                  task better. I really enjoyed working with you, having spent a
                  difficult week on our Task manager app, being on a deadline
                  and having to learn several new technologies, you were always
                  positive and helped the team a lot with researching.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE06"}>
            <div
              className={`title ${selectedSection === "FEE06" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE06")}
            >
              Sherif Shendidy - Software Engineer at at M&G Prudential
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE06" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/sherif-shendidy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sherif Shendidy
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “It was a real pleasure working with you on our final project
                  at Makers. You were so dedicated, your thoughts were very
                  organised, and it was so helpful the way you diagrammed the
                  options we had and plans/routes we can follow to deliver the
                  required feature. You were also a great team player, with
                  great sense of humer and ability engage in a focused fruitful
                  conversation to solve problems and plan for the works ahead of
                  us.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE05"}>
            <div
              className={`title ${selectedSection === "FEE05" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE05")}
            >
              Elliot Jennings - Software Engineer at Deloitte UK
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE05" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/elliot-jennings/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elliot Jennings
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Before working on Jungl-Book with Adrien I thought I had
                  grasped the concept of agile development. It was the guidance
                  of Adrien during this project which allowed our team to now
                  say we are confident with the framework. He gave us workshops
                  on the scrum process and was devoted to making us stick to the
                  following agile development in our second week. He is driven
                  to manage a project and it seems to be a natural position for
                  him as he always focuses on the bigger picture even when the
                  team are being slightly short-sighted.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE04"}>
            <div
              className={`title ${selectedSection === "FEE04" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE04")}
            >
              Vaith Schmitz - Software Engieer at RoboRecruiter Inc.
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE04" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/vaithschmitz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vaith Schmitz
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Adrien has been great to work with on JunglBook. He’s super
                  eager to learn and always found a ton of resources for us to
                  use to understand a topic. His curiosity led us to question
                  our processes more and he was the driving force behind us
                  deciding to redo everything from scratch in week 2 to follow
                  strict agile principles. Especially in this implementing good
                  practices, Adrien was a huge asset to the team by his
                  knowledge and experience.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE03"}>
            <div
              className={`title ${selectedSection === "FEE03" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE03")}
            >
              William Dunk - Software Engineer at iProov
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE03" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/wpdunk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    William Dunk
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “Adrien was a pleasure to work with throughout the Makers BnB
                  project, he handled the pressures of new technologies and the
                  first taste of software development group work with ease. When
                  faced with questions with the new concepts he was the first to
                  press for clarification often to the benefit of the wider
                  group. Equally at ease pairing and working solo, Adrien could
                  always be relied upon to meet sprint goals.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE02"}>
            <div
              className={`title ${selectedSection === "FEE02" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE02")}
            >
              Matthew Whitaker - Software Engineer at Factorial HR
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE02" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/matthew-w-54896224/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Matthew Whitaker
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “You were generally very effective when writing tests and
                  debugging any subsequent solutions, keeping them simple and
                  iterating up to a more complex implementation. The only time
                  you seemed to struggle was when you added in a bulk of
                  complexity in one go, and you seemed to be a bit stuck on what
                  to do next. To offer a suggestion here, the error message was
                  giving a clear indication of the problem (‘cannot coerce nil
                  to integer’) along with the particular line – paying closer
                  attention this would likely have helped you narrow down the
                  scope of the problem. To look at it positively, this situation
                  reinforces your original methodology of keeping it simple and
                  building up step-by-step, is very effective. It was only when
                  you deviated away from your method when you seemed to get
                  stuck.
                </p>
                <p>
                  You were also very diligent in keeping your classes very
                  flexible, for example lifting out the prices in the checkout
                  challenge to the tests. This allowed you write a very clean
                  adaptable class, and showed me a new way to approach the
                  problem. I felt like I learned a couple of really valuable
                  things from observing your process in the workshop, especially
                  around how to keep your tests lean and elegant using things
                  like subject. You clearly have a very solid understanding of
                  ruby and are very driven to writing high quality code which is
                  flexible yet very readable.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>

        <div className="card">
          <ScrollableAnchor id={"FEE01"}>
            <div
              className={`title ${selectedSection === "FEE01" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE01")}
            >
              Diptis Halder - Software Engineer at Alfa Financial Software
            </div>
          </ScrollableAnchor>
          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE01" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  <a
                    href="https://www.linkedin.com/in/diptis-halder/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diptis Halder
                  </a>{" "}
                  as a Makers student:
                </p>{" "}
                <p>
                  “It was clear that he can code fluently as soon after we
                  settled on the technology stack we would use he did a large
                  part of the code to reach our MVP. He then built on that and
                  improved features, especially on the look and feel of the
                  front-end, showing his skill in refactoring the initial
                  deliverables.
                </p>
                <p>
                  His approach to creating new software is very methodical and
                  while we did not do as much formal TDD in this project as we
                  had hoped we were nonetheless working in a very logical way
                  together, and Adrien can take a lot of credit in keeping the
                  team aligned in that way. In the second week of the project
                  our team worked very well following Agile processes and
                  Adrien’s contribution was a key factor in achieving this. He
                  made sure that we performed the necessary Agile ceremonies and
                  that we iterated and collaborated in our work.
                </p>
                <p>
                  I was also glad for the quality of the planning and feedback
                  he gave to us all as we prepared the presentation and demo of
                  our product. This helped to make the last two days of the
                  project very rewarding for me personally. When it came to
                  investigating new technologies and testing them out he showed
                  his keenness and ability in learning by himself. He got some
                  example code working very quickly by following tutorials and
                  other online resources. When he shared and explained his work
                  it helped the team to understand the possibilities and
                  challenges involved with those technologies.”
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
        <div className="card">
          <ScrollableAnchor id={"FEE00"}>
            <div
              className={`title ${selectedSection === "FEE00" && "highlight"}`}
              onClick={() => this.props.updateSelectedSection("FEE00")}
            >
              Job Interviews
            </div>
          </ScrollableAnchor>

          <VelocityTransitionGroup
            enter={{ animation: "slideDown" }}
            leave={{ animation: "slideUp" }}
          >
            {selectedSection === "FEE00" ? (
              <div className={`text show`}>
                {" "}
                <p>
                  “I particularly liked how you made the code test so human;
                  dealing with user journeys to give it real life purpose!”
                </p>
                <p>
                  “They thought you came across very switched on and
                  intelligent, and were impressed as you were the only person to
                  do C#. They said the technical interview went well, and they
                  liked how you were able to make use of online resources for
                  C#. You could talk about what wasn’t covered in unit tests
                  (they said you acknowledged you could do more). Some of the
                  feedback said that you were very motivated and came across
                  well in one of the one-to-ones, but they overall they didn’t
                  think you conveyed enough enthusiasm and thought that you
                  might be too reserved in the team to hit the ground running
                  with making contributions and speaking up".
                </p>
              </div>
            ) : undefined}
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Feedback
