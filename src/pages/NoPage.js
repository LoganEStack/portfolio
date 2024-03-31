import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as QuestionMark } from '../assets/images/question_mark.svg'

const NoPage = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column ">
      <Row className="h-100">
        <Col style={{ "margin": "auto" }}>
          <Row>
            <div className="info_section">
              <p className="info_header">404</p>
              <p className="info_description">
                Couldn't find the page you're looking for. Please click one of the navigation links at the top of the page.
              </p>
            </div>
            <div className='home_section'>
              <QuestionMark/>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>

  );
};

export default NoPage;