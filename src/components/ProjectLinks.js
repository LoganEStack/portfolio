import { ReactComponent as Github } from '../assets/images/svg/github.svg'

export default function ProjectLinks({url}) {
  return (
    <div id="links" style={{'paddingBottom': '0.5rem'}}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Github width="2rem" height="100%" />
      </a>
    </div>
  );
};

// Icon by freeicons4you@gmail.com on freeicons.io