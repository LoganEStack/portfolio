import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'

export default function NoPage() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className="vh-100 invert_theme">
        <BackArrow/>
        <div className='flex-container'>
          <section className="info">
            <div className='info_header'>404</div>
            <div className='info_text_centered'>
              Page not found. Click the up arrow at the top of the screen to go 
              back to the home page.
            </div>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};
