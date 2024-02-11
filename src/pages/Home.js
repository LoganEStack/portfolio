import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import resume from "../assets/Logan_Stack_Resume.pdf"
import hand from '../assets/images/hand.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column ">
      <Row className="h-100">
        <Col style={{ "margin": "auto" }}>
          <div className="info_section home">
            <p className="info_header">Hi, I'm Logan</p>
            <p className="info_description">
              My name's Logan and I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras that go into
              our autonomous vehicles. You can read about my past work experience below and can also checkout
              my Github for links to personal projects.
            </p>

            <div id="links">
              <a className="font_awesome_icons" href="mailto:loganestack@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a className="font_awesome_icons" href="https://www.linkedin.com/in/logan-stack/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="font_awesome_icons" href="https://github.com/LoganEStack" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {/* <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" className="rounded-0">Grab a resume</Button>
              </a> */}
            </div>
          </div>
        </Col>
        <Col className='home_section'>
          <img className="image_hand" src={hand} alt="Waving Hand"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;