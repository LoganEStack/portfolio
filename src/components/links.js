import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import resume from '../assets/Logan_Stack_Resume.pdf'
import { ReactComponent as Github } from '../assets/images/github.svg'
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg'
import { ReactComponent as Mail } from '../assets/images/mail.svg'
import { ReactComponent as Resume } from '../assets/images/resume.svg'

export default function Home() {
  return (
    <div id="links">
      <a href="mailto:loganestack@gmail.com" title="email" target="_blank" rel="noopener noreferrer">
        <Mail width="2rem" height="auto" />
      </a>
      <a href="https://www.linkedin.com/in/logan-stack/" title="linkedin" target="_blank" rel="noopener noreferrer">
        <Linkedin width="2rem" height="auto" />
      </a>
      <a href="https://github.com/loganestack" title="github" target="_blank" rel="noopener noreferrer">
        <Github width="2rem" height="auto" />
      </a>
      <a href={resume} title="resume" target="_blank" rel="noopener noreferrer">
        <Resume width="2rem" height="auto" />
      </a>
    </div>
  );
};
