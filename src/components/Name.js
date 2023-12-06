import Button from 'react-bootstrap/Button';
import resume from "../assets/Logan_Stack_Resume.pdf"

function Name() {
  return (
    <div className="name">
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <div className="name_outline"/>
      <p className="name_header">Logan Stack</p>
      <p className="name_subheader">Software Engineer at General Motors</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <Button variant="outline-dark" className="rounded-0">Grab a resume</Button>
      </a>
    </div>
  );
}

export default Name;