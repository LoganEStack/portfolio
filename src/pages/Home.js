import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Links from '../components/links';

export default function Home() {
  return (
    <Container fluid className="vh-100">
      <Row>
        <Col>
          <div className="name" id="Logan">Logan</div>
          <div className="name" id="Stack">Stack</div>
          <Links/>
        </Col>
      </Row>
    </Container>
  );
};
