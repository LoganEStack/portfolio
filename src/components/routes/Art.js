function Art({toggleInfoDisplay, activeTab}) {
  if (activeTab === "Art") {
    return (
      <div className="route skew" onClick={() => toggleInfoDisplay("Art")}>ART</div>
    );
  } else {
    return (
      <div className="route" onClick={() => toggleInfoDisplay("Art")}>ART</div>
    );
  }
}

export default Art;