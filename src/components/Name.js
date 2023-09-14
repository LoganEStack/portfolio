import Button from 'react-bootstrap/Button';
import resume from "../assets/Logan_Stack_Resume.pdf"

function Name() {
  return (
    <div className="name" style={{"padding":".5rem 1rem"}}>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <p style={{"fontWeight": "bold", "fontSize": "1.5em"}}>Logan Stack</p>
      <p style={{"fontSize": "1.1em"}}>Software Engineer at General Motors</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <Button variant="outline-dark" className="rounded-0">Grab a resume</Button>
      </a>
    </div>
  );
}

export default Name;