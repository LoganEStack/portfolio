import { useState, useEffect } from 'react';
import Name from './components/Name';
import About from './components/routes/About';
import Work from './components/routes/Work';
import Projects from './components/routes/Projects';
import Art from './components/routes/Art';
import Info from './components/Info';
import useWindowDimensions from './hooks/useWindowDimensions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

function App() {
  const { height, width } = useWindowDimensions();
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [routesStyle, setRoutesStyle] = useState("routes");

  useEffect(() => {
    if (width < 992 && isInfoDisplayed === false) {
      setActiveTab("About")
    }
    if (width >= 992 && activeTab !== "") {
      setRoutesStyle("routes_justified");
    }
  }, [width, isInfoDisplayed, activeTab]);

  const toggleInfoDisplay = (route) => {
    if (route === activeTab) {
      // if not on mobile, close tab
      if (width >= 992) {
        setActiveTab("");
        setIsInfoDisplayed(false);
        setRoutesStyle("routes");
      }
    } else {
      setActiveTab(route);
      setIsInfoDisplayed(true);
      setRoutesStyle("routes_justified");
    }
  }

  return (
    <div id="app">
      <Container fluid className={width >= 992 ? "background" : "background_mobile"}>
        <Row id="header">
          <Col>
            <Name></Name>
          </Col>
        </Row>
        <Row id="body">
          <Col>
            <Row id="routes" className={routesStyle}>
              <Col xs={"auto"} lg={12}>
                <About toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></About>
              </Col>
              <Col xs={"auto"} lg={12}>
                <Work toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Work>
              </Col>
              <Col xs={"auto"} lg={12}>
                <Projects toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Projects>
              </Col>
              <Col xs={"auto"} lg={12}>
                <Art toggleInfoDisplay={toggleInfoDisplay} activeTab={activeTab}></Art>
              </Col>
            </Row>
            { activeTab !== "" &&
              <Row className="d-lg-none" style={{"marginTop": "40px"}}>
                <Col>
                  <Info activeTab={activeTab}></Info>
                </Col>
              </Row>
            }
          </Col>

          { activeTab !== "" &&
            <Col className="d-none d-lg-block">
              <Info activeTab={activeTab}></Info>
            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
