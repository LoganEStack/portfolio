import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../assets/images/books.png';

const Projects = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column ">
      <Row className="h-100">
        <Col style={{ "margin": "auto" }}>
          <Row>
            <img className="image_books" src={books} alt="books drawing" />
          </Row>
          <Row>
            <div className="info_section">
              <p className="info_header">Projects</p>
              <p className="info_description">
                Here's a couple of projects that I've worked on in my free time. I've tried to tackle a number
                of projects utilizing different technologies in unique personal areas of interest. I've learned
                lots about the technologies involved in ___
                Clicking on the names of these projects will bring you to their respective Github pages.
              </p>
            </div>
          </Row>
        </Col>
        <Col>
          <div className="projects_section">
            <div className="project">
              <p className="project_header">
                <a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">picture_book</a>
              </p>
              <p className="project_description">
                adds AI generated illustrations to books by using topic modeling to determine the central theme of each page
              </p>
            </div>

            <div className="project">
              <p className="project_header">
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Something else</a>
              </p>
              <p className="project_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>

            <div className="project">
              <p className="project_header">
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Example</a>
              </p>
              <p className="project_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;