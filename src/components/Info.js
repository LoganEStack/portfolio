import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import Button from 'react-bootstrap/Button';

function Info({activeTab}) {
  switch(activeTab) {
      case "About":
        return (
          <div className="info">
            <p className="info_header">Hello.</p>
            <p className="info_description">
              My name's Logan and I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras 
              that go into our autonomous vehicles. You can read about my past work experience below 
              and can also checkout my Github for links to personal projects.
            </p>
            <div>
              <a className="font_awesome_icons" href="mailto:loganestack@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope}  />
              </a>
              <a className="font_awesome_icons" href="https://www.linkedin.com/in/logan-stack/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="font_awesome_icons" href="https://github.com/LoganEStack" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>            
            </div>
          </div>
        );
      case "Work":
        return (
          <div className="info">
            <div className="info_section">
              <p className="info_header"><a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">General Motors</a></p>
              <p className="info_description">Software Engineer <span style={{"color":"grey"}}>(2022-Present)</span></p>
              <p className="info_subdescription">I write software to analyze image quality for the cameras on GM's autonomous vehicles.</p>
              <p className="info_description">DevOps Engineer <span style={{"color":"grey"}}>(2019-2022)</span></p>
              <p className="info_subdescription">I worked on the automation of build and testing software for the code residing in 60 individual Electronic Control Units for the Vehicles and Embedded Controls division.</p>
            </div>
            <div className="info_section">
              <p className="info_header"><a href="https://www.michelin.com/en/" target="_blank" rel="noopener noreferrer">Michelin</a></p>
              <p className="info_description">Software Engineer Intern <span style={{"color":"grey"}}>(2018)</span></p>
              <p className="info_subdescription">I spent my time on the Dev Ops Team writing applications to support other sub-departments within IT.</p>
            </div>
            <div className="info_section">
              <p className="info_header"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a></p>
              <p className="info_description">Software Engineer Intern <span style={{"color":"grey"}}>(2017)</span></p>
              <p className="info_subdescription">I built and maintained an internal IT Portal for department-wide use using WordPress.</p>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="info">
            <div className="info_section">
              <p className="info_header"><a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">picture_book</a></p>
              <p className="info_subdescription">A program that adds AI generated illustrations to books by using topic 
                modeling to determine the central theme of each page.</p>
            </div>
            <div className="info_section">
              <p className="info_header"><a href="https://github.com/LoganEStack/FakeFactsBot" target="_blank" rel="noopener noreferrer">Twitter Bot</a></p>
              <p className="info_subdescription">Wrote a twitter bot that tweets comments from reddit.com threads every hour using twitter and reddit API.</p>
            </div>
            <div className="info_section">
              <p className="info_header"><a href="https://github.com/LoganEStack/PhysicianTimeTracker" target="_blank" rel="noopener noreferrer">Physician Time Tracker</a></p>
              <p className="info_subdescription">Worked with a capstone team to create a Swift application for Shippert Tech. This application is capable of recording medical procedures and time spent with patients for auditing purposes.</p>
            </div>
          </div>
        );
      case "Art":
        return (
          <div className="info">
            <p className="info_header">See some of my art.</p>
            <p style={{"marginBottom": "1rem"}} className="info_description">
              Drawing and painting are hobbies of mine.
              See some of the stuff I've done by clicking bellow.
            </p>
            <a href="https://drive.google.com/drive/folders/1qQzT3iMG80d-Zth5t1t94XKaxtcF7PGD?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="rounded-0">See some stuff</Button>
            </a>
          </div>
        );
      default:
        return (
          <div className="info">Could not load information.</div>
        );
    }
}

export default Info;