import Button from 'react-bootstrap/Button';
import resume from "../assets/Logan Stack Resume.pdf"

function Name() {
  return (
    <div className="name" style={{"padding":"5px 10px 15px 10px"}}>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <p style={{"fontWeight": "bold", "fontSize": "20px"}}>Logan Stack</p>
      <p style={{"fontSize": "18px"}}>Software Engineer at General Motors</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <Button variant="outline-dark" className="rounded-0">Grab a resume</Button>
      </a>
    </div>
  );
}

export default Name;