import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import car from '../assets/images/car.png';

const Work = () => {
  return (
    <Container fluid>
      {/* <div className="work_container"> */}
      <Row style={{"background-color":"#fae8e8"}}>
        <Col style={{"background-color":"#dbcaca"}}>
          {/* <div className="work_container_left"> */}
          <Row style={{"background-color":"#b09b9b"}}>
            <div className="image_car">
              <img src={car} alt="Car drawing" />
            </div>
          </Row>
          <Row className="info_section">
            <p className="info_header">Work</p>
            <p className="info_description">
              Over the course of my career I've had the pleasure of working for some industry-leading businesses.
              My internships at Michelin and IEEE were a _____
              I then started my first full-time position at General Motors where I helped found a Dev Ops team
              responsible for managing all embedded vehicle code. Now, I work in Autonomous, where
              I write software to analyze image quality for the cameras on GM's vehicles.
            </p>
          </Row>
          {/* </div> */}
        </Col>
        <Col style={{"background-color":"#d9baba"}}>
          {/* <div className="work_container_right"> */}
          <p className="work_header"><a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">General Motors</a></p>
          <p className="work_description">Software Engineer <span style={{ "color": "grey" }}>(2022-Present)</span></p>
          <p className="work_description">DevOps Engineer <span style={{ "color": "grey" }}>(2019-2022)</span></p>

          <p className="work_header"><a href="https://www.michelin.com/en/" target="_blank" rel="noopener noreferrer">Michelin</a></p>
          <p className="work_description">Software Engineer Intern <span style={{ "color": "grey" }}>(2018)</span></p>

          <p className="work_header"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a></p>
          <p className="work_description">Software Engineer Intern <span style={{ "color": "grey" }}>(2017)</span></p>
          {/* </div> */}
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  )
};

export default Work;