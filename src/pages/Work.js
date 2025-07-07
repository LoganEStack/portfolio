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
            <section className="content">
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">
                  <div className='job'>
                    <div className='content_subheader'><h2>General Motors</h2></div>
                    <div className='content_subtext'>Software Engineer (2022-Present)</div>
                    <p style={{ 'paddingBottom': '0' }}>
                      Writing software for the evaluation of camera hardware components using Flask (Python) and React (Javascript).
                    </p>
                    <div className='content_subtext' style={{ "paddingTop": "1rem" }}>DevOps Engineer (2019-2022)</div>
                    <p>
                      Developed the release portion of the CI/CD pipeline for all Electronic Control Units
                      in GM's Vehicle Motion and Embedded Controls division.
                    </p>
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="https://www.michelin.com/" target="_blank" rel="noopener noreferrer">
                  <div className='job'>
                    <div className='content_subheader'><h2>Michelin</h2></div>
                    <div className='content_subtext'>Software Engineer Intern (2018)</div>
                    <p>
                      Created applications in Python and Groovy to support other sub-departments within IT.
                    </p>
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                  <div className='job'>
                    <div className='content_subheader'><h2>IEEE</h2></div>
                    <div className='content_subtext'>Software Engineer Intern (2017)</div>
                    <p>
                      Built and maintained an internal IT Portal for department news and articles using WordPress.
                    </p>
                  </div>
                </a>
              </motion.div>
            </section>
          </div>
          <div className="page-footer"><p>© 2025 Logan Stack</p></div>
        </div>
      </Container>
    </motion.div>
  );
};
