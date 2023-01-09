function About({toggleInfoDisplay, activeTab}) {
  if (activeTab === "About") {
    return (
      <div className="route skew" onClick={() => toggleInfoDisplay("About")}>ABOUT</div>
    );
  } else {
    return (
      <div className="route" onClick={() => toggleInfoDisplay("About")}>ABOUT</div>
    );
  }
}

export default About;