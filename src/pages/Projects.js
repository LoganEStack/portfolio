import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'
import PageFooter from '../components/PageFooter'

const featured = {
  title: 'stream stack',
  url: 'https://github.com/LoganEStack/streamstack',
  image: require('../assets/images/projects/streamstack.png'),
  description: 'A full upload-to-playback video streaming platform: FastAPI backend, FFmpeg transcoding into adaptive-bitrate HLS, and a React frontend with real-time upload and rendition tracking.',
  tags: ['FastAPI', 'React', 'SQLModel', 'SQLite', 'FFmpeg', 'HLS / ABR']
};

const projects = [
  {
    title: 'short stack',
    url: 'https://github.com/LoganEStack/shortstack',
    image: require('../assets/images/projects/shortstack_wide.png'),
    description: 'A URL shortener serving as an example of standards and practices for APIs, databases, deployment, etc.',
    tags: ['Flask', 'React', 'PostgreSQL', 'Redis']
  },
  {
    title: 'connect 4',
    url: 'https://github.com/LoganEStack/connect4',
    image: require('../assets/images/projects/connect4_wide.png'),
    description: 'A game of connect 4 versus an artificial intelligence using the Minimax algorithm.',
    tags: ['Python', 'Minimax']
  },
  {
    title: 'picture book',
    url: 'https://github.com/LoganEStack/picture_book',
    image: require('../assets/images/projects/picture_book_wide.png'),
    description: 'A program that adds AI-generated illustrations to books by using topic modeling to determine the central theme of each page.',
    tags: ['Python']
  },
  {
    title: 'cs compendium',
    url: 'https://github.com/LoganEStack/cs_compendium',
    image: require('../assets/images/projects/cs_compendium_wide.png'),
    description: 'An overly-extensive study guide that I wrote for technical interviews.',
    tags: ['Markdown']
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
    >
      <Container fluid className="page-container invert-theme">
        <div className="scroll-wrapper">
          <BackArrow />
          <div className='page-header'>
            <h1>
              Projects
              <div className='line_break'></div>
            </h1>
          </div>

          <div className='page-body'>
            <section className="content_project">
              <motion.a
                className="proj-featured"
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
              >
                <img className="proj-featured-image" loading="lazy" src={featured.image} alt={featured.title} width="500" height="auto" />
                <div className="proj-featured-body">
                  <div className="proj-eyebrow">Featured</div>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <div className="tag-row">
                    {featured.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.a>

              <div className="proj-grid">
                {projects.map((project) => (
                  <motion.a
                    className="proj-card"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.title}
                    whileHover={{ y: -4 }}
                  >
                    <img className="proj-card-image" loading="lazy" src={project.image} alt={project.title} width="500" height="auto" />
                    <div className="proj-card-body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-row tag-row-sm">
                        {project.tags.map((tag) => (
                          <span className="tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          </div>
          <PageFooter />
        </div>
      </Container>
    </motion.div>
  );
};
