import { useState, useEffect } from 'react';
import Name from './components/Name';
import About from './components/routes/About';
import Work from './components/routes/Work';
import Projects from './components/routes/Projects';
import Art from './components/routes/Art';
import Info from './components/Info';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [routesStyle, setRoutesStyle] = useState("routes");

  const toggleInfoDisplay = (route) => {
    if (route === activeTab) {
      setActiveTab("");
      setIsInfoDisplayed(false);
      setRoutesStyle("routes");
    } else {
      setActiveTab(route);
      setIsInfoDisplayed(true);
      setRoutesStyle("routes_justified");
    }
  }
  
  useEffect( () => {
    console.log(isInfoDisplayed, activeTab)
    // Javascript code to move text to the left and then right align it smoothly
    // ...
  }, [isInfoDisplayed, activeTab]);

  return (
    <div id="app">
      <Container fluid className="background">
        <Row id="header">
          <Col>
            <Name></Name>
          </Col>
        </Row>
        <Row id="body" className="align-items-center">
          <Col className="d-none d-xl-block">
            <div id="routes" className={routesStyle}>
              <Row>
                <Col>
                  <About toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></About>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Work toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Work>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Projects toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Projects>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Art toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Art>
                </Col>
              </Row>
            </div>
          </Col>

          { activeTab !== "" &&
            <Col>
                <Info activeTab={activeTab}></Info>
            </Col>
          }
        </Row>
      </Container>
      <div className='old_site'>        
        <Button size="sm" variant="outline-dark" className="rounded-0">Go to old site</Button>
      </div>
    </div>
  );
}

export default App;
