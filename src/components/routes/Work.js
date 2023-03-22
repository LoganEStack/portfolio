function Work({toggleInfoDisplay, activeTab}) {
  if (activeTab === "Work") {
    return (
      <div className="route skew underline" onClick={() => toggleInfoDisplay("Work")}>WORK</div>
    );
  } else {
    return (
      <div className="route" onClick={() => toggleInfoDisplay("Work")}>WORK</div>
    );
  }
}

export default Work;