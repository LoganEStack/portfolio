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
              <div className='content_subheader' style={{ "paddingBottom": "2rem" }}><h2>Hi, I'm Logan.</h2></div>
              <p>
                I'm a software engineer with a passion for creativity.
                My goal is to making things look their best and work even better.
                I love all things imaginative and try to find that spark where ever I can in my work and life.
              </p>
              <p>
                Currently, I'm a Software Engineer II
                at <a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer" className='text_link'>General Motors</a>,
                where I write code to help evaluate the cameras that go into our vehicles. 
                Picking the best hardware from a large range of suppliers can be challenging. 
                My work measures image quality and aids in physical test set up to help make 
                the decision as simple and as accurate as possible.
                This largely aligns with full stack development and scripting using the 
                React and Flask frameworks in Javascript and Python respectively.
              </p>
              <p>
                When I'm not writing APIs or designing GUIs I'm usually hunched over a pottery wheel,
                painting in acrylics, or practicing calligraphy. It's a goal of mine to try each art 
                form at least once! I'm an avid moviegoer as well. My favorite is John Carpenter's 
                The Thing though I have particular fondness all types of animation.
              </p>
              <p>
                If you think I might be right for an opportunity, or you just want to chat about the
                best Studio Ghibli film 
                (it's <span className='totoro text_link'>
                  <span>T</span><span>o</span><span>t</span><span>o</span><span>r</span><span>o</span>
                </span>) 
                please send me an <a href="mailto:loganestack@gmail.com" target="_blank" rel="noopener noreferrer" className='text_link'>email</a> to say hello!
              </p>
            </section>
          </div>
          <div className="page-footer"><p>© 2025 Logan Stack</p></div>
        </div>
      </Container>
    </motion.div>
  );
};
