import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'
import PageFooter from '../components/PageFooter'

const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'Justworks',
    url: 'https://www.justworks.com/',
    dates: '2025 – 2026',
    current: true,
    description: "Backend development for the Company Onboarding team, helping businesses register for Justworks' products and services."
  },
  {
    role: 'Software Engineer',
    company: 'General Motors',
    url: 'https://www.gm.com/',
    dates: '2022 – 2025',
    description: 'Developed software to evaluate supplier hardware components for vehicle cameras.'
  },
  {
    role: 'DevOps Engineer',
    company: 'General Motors',
    url: 'https://www.gm.com/',
    dates: '2019 – 2022',
    description: "Developed the release portion of the CI/CD pipeline for all Electronic Control Units in GM's Vehicle Motion and Embedded Controls division."
  },
  {
    role: 'Software Engineer Intern',
    company: 'Michelin',
    url: 'https://www.michelin.com/',
    dates: '2018',
    description: 'Created applications in Python and Groovy to support other sub-departments within IT.'
  },
  {
    role: 'Software Engineer Intern',
    company: 'IEEE',
    url: 'https://www.ieee.org/',
    dates: '2017',
    description: 'Built and maintained an internal IT Portal for department news and articles using WordPress.'
  }
];

export default function Work() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className="page-container invert-theme">
        <div className="scroll-wrapper">
          <BackArrow />
          <div className='page-header'>
            <h1>
              Work
              <div className='line_break'></div>
            </h1>
          </div>

          <div className='page-body'>
            <div className="timeline">
              {jobs.map((job) => (
                <motion.a
                  key={`${job.company}-${job.role}`}
                  className={`tl-item${job.current ? ' current' : ''}`}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                >
                  <div className="tl-dot"></div>
                  <div className="tl-role">{job.role}</div>
                  <div className="tl-company">{job.company}</div>
                  <div className="tl-dates">{job.dates}</div>
                  <p>{job.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
          <PageFooter />
        </div>
      </Container>
    </motion.div>
  );
};
