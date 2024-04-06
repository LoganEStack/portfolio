import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'
import ProjectLinks from '../components/ProjectLinks'

export default function Projects() {
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
        <div className='flex-container'>
          <section className="info">
            <div className='info_header'>Projects</div>
            <Row>
              <Col>
                <div className='info_subheader'>picture_book</div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}
                >
                  <a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">
                    <img className='project_image' src={require("../assets/images/projects/picture_book.png")} alt="picture_book" width="500" height="auto" />
                  </a>
                </motion.div>
                <ProjectLinks url={"https://github.com/LoganEStack/picture_book"} />
                <p>
                  A program that adds AI generated illustrations to books by using
                  topic modeling to determine the central theme of each page.
                </p>
              </Col>
              {/* <Col xs={6}>
                <div className='info_subheader'>picture_book</div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}
                >
                  <a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">
                    <img className='project_image' src={require("../assets/images/projects/picture_book.png")} alt="picture_book" width="500" height="auto" />
                  </a>
                </motion.div>
                <ProjectLinks url={"https://github.com/LoganEStack/picture_book"} />
                <p>
                  A program that adds AI generated illustrations to books by using
                  topic modeling to determine the central theme of each page.
                </p>
              </Col> */}
            </Row>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};
