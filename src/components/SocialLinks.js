import { ReactComponent as Github } from '../assets/images/svg/github.svg'
import { ReactComponent as Linkedin } from '../assets/images/svg/linkedin.svg'
import { ReactComponent as Mail } from '../assets/images/svg/mail.svg'
import { ReactComponent as Resume } from '../assets/images/svg/resume.svg'

export default function SocialLinks() {
  return (
    <div id="home-links">
      <a href="mailto:loganestack@gmail.com" title="email" target="_blank" rel="noopener noreferrer">
        <Mail width="2rem" height="100%" />
      </a>
      <a href="https://www.linkedin.com/in/logan-stack/" title="linkedin" target="_blank" rel="noopener noreferrer">
        <Linkedin width="2rem" height="100%" />
      </a>
      <a href="https://github.com/loganestack" title="github" target="_blank" rel="noopener noreferrer">
        <Github width="2rem" height="100%" />
      </a>
      <a href="/Logan_Stack_Resume.pdf" title="resume" target="_blank" rel="noopener noreferrer">
        <Resume width="2rem" height="100%" />
      </a>
    </div>
  );
};

// Icons by freeicons4you@gmail.com on freeicons.io