function About({toggleInfoDisplay, activeTab}) {
  let route = "route"
  if (activeTab === "About") {
    route = "route_selected"
  }
  return (
    <div className={route} onClick={() => toggleInfoDisplay("About")}>ABOUT</div>
  );
}

export default About;