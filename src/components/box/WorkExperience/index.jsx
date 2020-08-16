import React, { Component } from "react"

class WorkExperience extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { selectedSection } = this.props

    return (
      <div>
        <h3 className="header">Work Experience</h3>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX05" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX05")}
          >
            2019 - 2020 - FullStack Developer - ReactJS and AWS with Serverless
            in NodeJS - London, UK
          </div>

          <div className={`text ${selectedSection === "WEX05" && "show"}`}>
            <ul>
              <li>
                Created, refactored, tested and extended AWS microservices with
                Serverless and NodeJs.
              </li>
              <li>
                Used CloudFormation, API Gateway, Lambda, DynamoDB and S3,
                CloudWatch, IAM, Cognito.
              </li>
              <li>
                Created entire features from Frontend to Backend, using ReactJs
                and multiple API.
              </li>
              <li>
                Facilitated Scrum Ceremonies within weekly sprints and
                contributed to design sessions.
              </li>

              <li>
                Full Stack
                <ul>
                  <li>
                    Designed and created entirely an internal tool to facilitate
                    reconciliation between bank transactions from Xero API and
                    transactions from the database, collaborating with
                    accountant and the reconciliation team.
                  </li>
                  <li>
                    Created an internal tool to test all our API and databases
                    and find errors easily.
                  </li>
                </ul>
              </li>
              <li>
                Back End
                <ul>
                  <li>
                    Created, refactored, tested and extended AWS microservices.
                  </li>
                  <li>
                    Created services using CloudFormation templates for API
                    Gateway, Lambda and DynamoDB, also regularly using S3,
                    CloudWatch, IAM, Cognito and Amplify.
                  </li>
                  <li>
                    Created a mircoservice to resize and save to S3 all pictures
                    from external links.
                  </li>
                </ul>
              </li>
              <li>
                Front End
                <ul>
                  <li>
                    Improved an internal tool using ReactJs to fulfil orders
                    using our API endpoints.
                  </li>
                  <li>
                    Improved an internal tool to update resources DynamoDB from
                    Airtable API.
                  </li>
                </ul>
              </li>
              <p>
                <a
                  href="https://www.betterspace.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Better Space
                </a>
                – An A-Z of things that are good for your mind. From apps to
                hikes.
              </p>

              <p>
                Recommendation from{" "}
                <a
                  href="https://www.linkedin.com/in/jamesl1001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  James Alexander Lee - Software Developer at BetterSpace
                </a>
                : <br /> "Adrien is approachable, dedicated and enthusiastic and
                has a wide array of interests and passions which are valuable to
                any future employer. Adrien and I both joined BetterSpace at the
                same time and have worked together for the past 8 months. During
                his time with BetterSpace, Adrien quickly picked up new skills
                with React and AWS and put them to good use in various projects,
                mostly involving internal tools.
                <br /> These projects involved image compression, API automated
                testing, translating data between Airtable and Dynamo and
                building a brand new tool for the purpose of reconciling
                transactional data between our own database and Xero - not an
                easy feat! Especially during the latter project, in addition to
                the technical improvements, Adrien gained experience in
                wireframing, UI and UX design, collating complex requirements
                from various stakeholders and managing and taking ownership of
                the project.
                <br />
                Adrien is very enthusiastic to learn new things and improve his
                existing knowledge. He is extremely passionate about "tech for
                good" and always brings new ideas to the table. Adrien's time at
                BetterSpace has been invaluable for improving the team's
                workflow and I wish him all the best for his future!"
              </p>
              <p></p>
            </ul>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "EDU04" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("EDU04")}
          >
            2019 - Makers Software Engineering Bootcamp - London, UK
          </div>
          <div className={`text ${selectedSection === "EDU04" && "show"}`}>
            <p>
              <a
                href="https://makers.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Makers
              </a>{" "}
              16-weeks intensive development Bootcamp focused on :
            </p>
            <ul>
              <li>
                I can make anything
                <ul>
                  <li>I can TDD anything</li>
                  <li>I can program fluently</li>
                  <li>I can debug anything</li>
                  <li>I can model anything</li>
                  <li>I can refactor anything</li>
                  <li>I have a methodical approach to solving problems</li>
                </ul>
              </li>
              <li>
                I help my teams succeed
                <ul>
                  <li>I use an Agile product development process</li>
                  <li>I write code that is easy to change</li>
                  <li>I can justify the way I work in a business context</li>
                  <li>I can grow collaboratively</li>
                </ul>
              </li>
              <li>
                I am equipped for long term growth
                <ul>
                  <li>I manage my own well-being</li>
                  <li>I can learn anything by myself</li>
                </ul>
              </li>
            </ul>
            <p>
              Further info on my work towards those goals on my{" "}
              <a
                href="https://github.com/AdrienFabre/makers_coding_bootcamp_portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Makers portfolio
              </a>
              , on the Feedback section or on my GitHub CV.
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX04" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX04")}
          >
            {" "}
            2018 - Founder - I take part - Creating a social innovation lab -
            London, UK
          </div>
          <div className={`text ${selectedSection === "WEX04" && "show"}`}>
            <ul>
              <li>
                Research, develop and experiment workshop models to drive
                intuition, intention and actions.
              </li>
            </ul>
            <p>
              I take part – Creating a social innovation lab to cultivate social
              impact leadership.
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX03" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX03")}
          >
            2016 - 2017 - Community Coordinator and Facilitator - MakeSense -
            London, UK
          </div>
          <div className={`text ${selectedSection === "WEX03" && "show"}`}>
            <ul>
              <li>
                Organised, designed and facilitated 15+ design thinking
                workshops to help social entrepreneurs.
              </li>
              <li>
                Led a 90+ people event (tinyurl.com/zxfrhq4) and created
                collaborative tools to manage 10+ volunteers.
              </li>
              <li>
                Created relationships with 60+ organisations in order to
                maximise impact and reduce expenses.
              </li>
              <li>
                Developed tools for social entrepreneurs to impact food
                sustainability eco-systems in London.
              </li>
            </ul>
            <p>
              <a
                href="https://www.makesense.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MakeSense
              </a>{" "}
              is an international community that rallies individuals in 128
              cities across the world to help social entrepreneurs to solve
              their challenges.
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX02" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX02")}
          >
            2014 - 2015 - Business Development and Consulting - Freelance -
            MJBGraham - London, UK
          </div>
          <div className={`text ${selectedSection === "WEX02" && "show"}`}>
            <ul>
              <li>
                Advised start-ups on business models, strategy, and innovation.
                Led 50+ consultations to structure and improve offers, sales
                channels, processes and pitches.
              </li>
              <li>
                Instigated partnerships with businesses and communities to reach
                the companies’ target audience.
              </li>
              <li>
                Acquired prospects from face to face and online networking to
                conclude deals using a CRM system.
              </li>
              <li>
                Organised and held workshops with a high focus on sales pitches,
                objection handling and sales closing.
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX01" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX01")}
          >
            2012 - 2013 - Project Buyer - Marketing and Communication Assistant
            - Schneider Electric
          </div>
          <div className={`text ${selectedSection === "WEX01" && "show"}`}>
            <p>Project Buyer in R&D center – Grenoble, France</p>
            <ul>
              <li>
                Created and implemented Excel-based shared tools which increased
                profit while also improving decision making and team efficiency
                through consensus building, performance optimisation and best
                practice sharing.
              </li>
              <li>
                Defined needs with engineers, collaborated with different
                departments, prepared requests for purchase quotations, analysed
                offers, negotiated with suppliers and trained staff to use tools
                (Combination of KPI, supplier mapping and cost database).
              </li>
            </ul>

            <p>Marketing and Communication Assistant – Moscow, Russia</p>
            <ul>
              <li>
                Organised, promoted and created content for Schneider Electric
                workshop during the AIESEC International Congress that resulted
                in 4 innovative concepts to enhance the company’s goals.
              </li>
            </ul>
            <p>
              <a
                href="http://www.schneider-electric.co.uk/en/about-us/company-profile.jsp?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schneider Electric
              </a>{" "}
              is the Global Specialist in Energy Management and Automation.
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className={`title ${selectedSection === "WEX00" && "highlight"}`}
            onClick={() => this.props.updateSelectedSection("WEX00")}
          >
            Side jobs - Funding my experiential journey - Exploring the food
            system, from seed to fork.
          </div>
          <div className={`text ${selectedSection === "WEX00" && "show"}`}>
            <p>
              Senior Pizza Chef –{" "}
              <a
                href="https://www.pizzaunion.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pizza Union
              </a>{" "}
              – Fast-paced pizza bar – 1 year – London, UK
            </p>

            <ul>
              <li>
                Mastered and supervised pizza production processes, ingredients
                quality, chefs skills and customers satisfaction.
              </li>
            </ul>

            <p>
              Senior Team Member –{" "}
              <a
                href="http://www.nojolondon.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nojo Crêpes
              </a>{" "}
              – Shop and catering; healthy, vegan and gluten-free crêpes – 1
              year – London, UK
            </p>

            <ul>
              <li>
                Mastered and improved processes, built relationships with
                customers: ordered food supply; managed stocks to reduce waste;
                cooked and prepared sauces, cakes and ingredients; made on
                demand healthy sweet and savoury crêpes with vegan gluten free
                alternatives; advised customers according to diets and tastes;
                managed cash from opening to closing; create daily reports;
                trained employees; managed orders from delivery platforms;
                managed catering events; created user friendly recipe design;
                found solutions in an evolving environment.
              </li>
            </ul>

            <p>
              Cyclist – Deliveroo – Takeaway delivery from premium restaurant –
              6 months – London, UK
            </p>

            <p>
              Cook – Aqualand and Quick – Fast-food restaurants – 2 years –
              Perpignan, France
            </p>

            <p>
              Warehouseman – Greenhouses and food processing factories – 9
              months – Perpignan, France
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkExperience
