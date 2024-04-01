import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Links from '../components/links';

export default function Work() {
  return (
    <Container fluid className="vh-100 invert_theme">
      <Row style={{ "height": "100%" }}>
        <Col>
          <div className="name name_background" id="Logan">Logan</div>
          <div className="name name_background" id="Stack">Stack</div>
          <Links/>
          <div className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis. </div>
        </Col>
      </Row>
    </Container>
  );
};
