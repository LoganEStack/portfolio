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
      <Container fluid className="vh-100">
        <div className='flex-container' style={{'height':'100%'}}>
          <header><h1>Logan Stack</h1></header>
          <Navigation />
          <SocialLinks />
        </div>
      </Container>
    </motion.div>
  );
};
