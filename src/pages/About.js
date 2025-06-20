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
      onAnimationStart={() => {
        document.body.style.overflow = 'hidden';
      }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto';
      }}
    >
      <Container fluid className="page-container invert-theme">
        <div className="scroll-wrapper">
          <BackArrow />
          <div className='page-header'>
            <h1>
              About
              <div className='line_break'></div>
            </h1>
          </div>
          <div className='page-body'>
            <section className="content content_about">
              <div className='content_subheader'><h2>Hi, I'm Logan.</h2></div>
              <p>
                I'm a software engineer based in Detroit, MI with a passion for creativity.<br></br>
                I'm currently employed at General Motors, where I write software to test the cameras that go
                into our vehicles. <br></br>
                I love all things imaginative and try to find that spark where ever I can
                in my work and life.
              </p>
              <p>
                Please send me an email if you'd like to chat!
              </p>
            </section>
          </div>
          <div className="page-footer"><p>© 2025 Logan Stack</p></div>
        </div>
      </Container>
    </motion.div>
  );
};
