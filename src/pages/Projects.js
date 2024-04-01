import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Links from '../components/links';

export default function Projects() {
  return (
    <Container fluid className="vh-100 invert_theme">
      <Row style={{ "height": "100%" }}>
        <Col>
          <div className="name name_background" id="Logan">Logan</div>
          <div className="name name_background" id="Stack">Stack</div>
          <Links/>
          <div className="info">
            Projects page
          </div>
        </Col>
      </Row>
    </Container>
  );
};
