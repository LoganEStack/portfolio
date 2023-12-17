import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Art from './pages/Art';
import NoPage from "./pages/NoPage";
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [routesStyle, setRoutesStyle] = useState("routes");

  // useEffect(() => {
  //   if (width < 992 && isInfoDisplayed === false) {
  //     setActiveTab("About")
  //   }
  //   if (width >= 992 && activeTab !== "") {
  //     setRoutesStyle("routes_justified");
  //   }
  // }, [width, isInfoDisplayed, activeTab]);

  // const toggleInfoDisplay = (route) => {
  //   if (route === activeTab) {
  //     // if not on mobile, close tab
  //     if (width >= 992) {
  //       setActiveTab("");
  //       setIsInfoDisplayed(false);
  //       setRoutesStyle("routes");
  //     }
  //   } else {
  //     setActiveTab(route);
  //     setIsInfoDisplayed(true);
  //     setRoutesStyle("routes_justified");
  //   }
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="art" element={<Art />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
