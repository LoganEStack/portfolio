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
        <div className='page_header'><h1>About</h1></div>
        <div className='flex-container'>
          <section className="info info_about">
            <div className='info_subheader'><h2>Hi, I'm Logan.</h2></div>
            <p>
              I'm a software engineer based in Detroit, MI with a passion for creativity.
              I'm currently employed at General Motors, where I write software to test the cameras that go
              into our vehicles. I love all things imaginative and try to find that spark where ever I can 
              in my work and life. <br></br>Please send me an email if you'd like to chat!
            </p>
          </section>
        </div>
        <div className="page-footer">© 2025 Logan Stack</div>
      </Container>
    </motion.div>
  );
};
