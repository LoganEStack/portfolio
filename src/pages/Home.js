import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import SocialLinks from '../components/SocialLinks';
import Navigation from './Navigation';


export default function Home() {
  return (
    <motion.div
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className='home-container'>
        <div className="scroll-wrapper scroll-wrapper-home">
          <div className='home-body'>
            <h1 className='home-title'>Logan Stack</h1>
            <Navigation />
            <SocialLinks/>
          </div>
          <div className="page-footer"><p>© 2025 Logan Stack</p></div>
        </div>
      </Container>
    </motion.div>
  );
};