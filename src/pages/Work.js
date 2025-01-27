import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'

export default function Work() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className="vh-100 invert_theme">
        <BackArrow />
        <div className='page_header'><h1>Work</h1></div>

        <div className='flex-container'>
          <section className="info">
            <a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">
              <div className='info_subheader'><h2>General Motors</h2></div>
            </a>
            <div className='info_subtext'>Software Engineer (2022-Present)</div>
            <p style={{'paddingBottom': '0'}}>
              I write software to analyze image quality for the cameras on GM's autonomous vehicles.
            </p>
            <div className='info_subtext'>DevOps Engineer (2019-2022)</div>
            <p>
              I worked on the automation of build and testing software for the code residing in
              60 individual Electronic Control Units for the Vehicles and Embedded Controls division.
            </p>
            <a href="https://www.michelin.com/" target="_blank" rel="noopener noreferrer">
              <div className='info_subheader'><h2>Michelin</h2></div>
            </a>
            <div className='info_subtext'>Software Engineer Intern (2018)</div>
            <p>
              I spent my time on the Dev Ops Team writing applications to support other sub-departments within IT.
            </p>
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
              <div className='info_subheader'><h2>IEEE</h2></div>
            </a>
            <div className='info_subtext'>Software Engineer Intern (2017)</div>
            <p>
              I built and maintained an internal IT Portal for department-wide use using WordPress.
            </p>
          </section>
        </div>
        <div className="page-footer">© 2025 Logan Stack</div>
      </Container>
    </motion.div>
  );
};
