import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Links from '../components/links';

export default function About() {
  return (
    <Container fluid className="vh-100 invert_theme">
      <Row style={{ "height": "100%" }}>
        <Col>
          <div className="name name_background" id="Logan">Logan</div>
          <div className="name name_background" id="Stack">Stack</div>
          <Links/>
          <div className="info">
            <p>
              Hi, I'm Logan. I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras that go
              into our autonomous vehicles. You can read about my past work experience below and can also
              checkout my Github for links to personal projects.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
