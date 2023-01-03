function Art({toggleInfoDisplay, activeTab}) {
  let route = "route"
  if (activeTab === "Art") {
    route = "route_selected"
  }
  return (
    <div className={route} onClick={() => toggleInfoDisplay("Art")}>ART</div>
  );
}

export default Art;