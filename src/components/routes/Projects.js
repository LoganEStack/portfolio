function Projects({toggleInfoDisplay, activeTab}) {
  let route = "route"
  if (activeTab === "Projects") {
    route = "route_selected"
  }
  return (
    <div className={route} onClick={() => toggleInfoDisplay("Projects")}>PROJECTS</div>
  );
}

export default Projects;