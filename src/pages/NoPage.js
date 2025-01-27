import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'

export default function About() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className="container invert_theme">
        <BackArrow />
        <div className='page_header'>
          <h1>
            404
            <div className='line_break'></div>
          </h1>
        </div>
        <div className='page-body'>
          <section className="info" style={{ 'max-width': '70ch' }}>
            <div className='info_subheader'>
              <h2>
                Page not found. Click the up arrow at the top of the screen to go
                back to the home page.
              </h2>
            </div>
          </section>
        </div>
        <div className="page-footer">© 2025 Logan Stack</div>
      </Container>
    </motion.div>
  );
};
