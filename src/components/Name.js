import Button from 'react-bootstrap/Button';

function Name(resume) {
  return (
    <div className="name">
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <p style={{"fontWeight": "bold"}}>Logan Stack</p>
      <p style={{"fontSize": "18px"}}>Software Engineer at General Motors</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <Button variant="outline-dark" className="rounded-0">Grab a resume</Button>
      </a>
    </div>
  );
}

export default Name;