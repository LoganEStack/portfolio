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
      <Container fluid className="vh-100 invert_theme">
        <BackArrow />
        <div className='page_header'>
          <h1>About</h1>
        </div>

        <div className='flex-container'>
          <section className="info">
            <div className='info_subheader'>Hi, I'm Logan.</div>
            <p>
              I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras that go
              into our vehicles. You can read about my past work experience below and can also
              checkout my Github for links to personal projects.
            </p>
          </section>
        </div>
      </Container>
    </motion.div>
  );
};
