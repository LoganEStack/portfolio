import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import Button from 'react-bootstrap/Button';

function Info({activeTab}) {
  switch(activeTab) {
      case "About":
        return (
          <div className="info">
            <p className="route_header">Hello.</p>
            <p>
              I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras 
              that go into our Autonomous Vehicles. You can read about my past work experience below 
              and can also checkout my Github for links to personal projects.
            </p>
            <div>
              <a class="font_awesome_icons" href="mailto:loganestack@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a class="font_awesome_icons" href="https://www.linkedin.com/in/logan-stack/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a class="font_awesome_icons" href="https://github.com/LoganEStack" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>            
            </div>
          </div>
        );
      case "Work":
        return (
          <div className="info">
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">General Motors</a></p>
              <p className="role">Software Engineer <span style={{"color":"grey"}}>(2022-Present)</span></p>
              <p className="role_description">I write software to analyze image quality for the cameras on GM's autonomous vehicles.</p>
              <p className="role">DevOps Engineer <span style={{"color":"grey"}}>(2019-2022)</span></p>
              <p className="role_description">I worked on the automation of build and testing software for the code residing in 60 individual Electronic Control Units for the Vehicles and Embedded Controls division.</p>
            </div>
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="https://www.michelin.com/en/" target="_blank" rel="noopener noreferrer">Michelin</a></p>
              <p className="role">Software Engineer Intern <span style={{"color":"grey"}}>(2018)</span></p>
              <p className="role_description">I spent my time on the Dev Ops Team writing applications to support other sub-departments within IT.</p>
            </div>
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a></p>
              <p className="role">Software Engineer Intern <span style={{"color":"grey"}}>(2017)</span></p>
              <p className="role_description">I built and maintained an internal IT Portal for department-wide use using WordPress.</p>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="info">
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="" target="_blank" rel="noopener noreferrer">illustrate_me</a></p>
              <p>A program that adds AI generated illustrations to books by using topic 
                modeling to determine the central theme of each page.</p>
            </div>
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="" target="_blank" rel="noopener noreferrer">Project 2</a></p>
              <p>Project description goes here.</p>
            </div>
            <div style={{"paddingBottom": "1.2em"}}>
              <p className="route_header"><a href="" target="_blank" rel="noopener noreferrer">Project 3</a></p>
              <p>Project description goes here.</p>
            </div>
          </div>
        );
      case "Art":
        return (
          <div className="info">
            <p className="route_header">See some of my art.</p>
            <p style={{"marginBottom": "0em"}}>Drawing and painting are hobbies of mine.</p>
            <p>See some of the stuff I've done by clicking bellow.</p>
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