import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'

export default function Projects() {
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
              Projects
              <div className='line_break'></div>
            </h1>
          </div>

          <div className='page-body'>
            <section className="content_project">
              <Row>
                <Col md={6} className='project'>
                  <div className='content_subheader'><h2>picture_book</h2></div>
                  <motion.div whileHover={{ scale: 1.05 }} >
                    <a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">
                      <img className='project_image' loading="lazy" src={require("../assets/images/projects/picture_book.png")} alt="picture_book" width="500" height="auto" />
                    </a>
                  </motion.div>
                  <p>
                    A program that adds AI generated illustrations to books by using
                    topic modeling to determine the central theme of each page.
                  </p>
                </Col>

                <Col md={6} className='project'>
                  <div className='content_subheader'><h2>cs_compendium</h2></div>
                  <motion.div whileHover={{ scale: 1.05 }} >
                    <a href="https://github.com/LoganEStack/cs_compendium" target="_blank" rel="noopener noreferrer">
                      <img className='project_image' loading="lazy" src={require("../assets/images/projects/cs_compendium.png")} alt="cs_compendium" width="500" height="auto" />
                    </a>
                  </motion.div>
                  <p>
                    An overly-extensive study guide that I wrote for practicing technical interviews.
                  </p>
                </Col>
              </Row>
            </section>
          </div>
          <div className="page-footer"><p>© 2025 Logan Stack</p></div>
        </div>
      </Container>
    </motion.div>
  );
};
