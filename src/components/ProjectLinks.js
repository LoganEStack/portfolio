import { ReactComponent as Github } from '../assets/images/svg/github.svg'

export default function ProjectLinks({url}) {
  return (
    <div id="links">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Github width="2rem" height="auto" />
      </a>
    </div>
  );
};
