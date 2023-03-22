function Projects({toggleInfoDisplay, activeTab}) {
  if (activeTab === "Projects") {
    return (
      <div className="route skew underline" onClick={() => toggleInfoDisplay("Projects")}>PROJECTS</div>
    );
  } else {
    return (
      <div className="route" onClick={() => toggleInfoDisplay("Projects")}>PROJECTS</div>
    );
  }
}

export default Projects;