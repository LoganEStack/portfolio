import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'
import PageFooter from '../components/PageFooter'

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
                My goal is to make things look their best and work even better.
                I love all things imaginative and try to find that spark wherever I can in my work and life.
              </p>
              <p>
                I've most recently worked as a Senior Software Engineer
                at <a href="https://www.justworks.com/" target="_blank" rel="noopener noreferrer" className='text_link'>Justworks</a>,
                where I designed systems and APIs to help small businesses sign up for Justworks' PEO and Payroll services.
              </p>
              <p>
                When I'm not pushing buttons on a keyboard I'm usually hunched over a pottery wheel,
                painting in watercolors, or watching movies.
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
          <PageFooter />
        </div>
      </Container>
    </motion.div>
  );
};
