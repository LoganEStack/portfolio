function Work({toggleInfoDisplay, activeTab}) {
  let route = "route"
  if (activeTab === "Work") {
    route = "route_selected"
  }
  return (
    <div className={route} onClick={() => toggleInfoDisplay("Work")}>WORK</div>
  );
}

export default Work;