import books from '../assets/images/books.png';

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects_container_left">
        <div className="image_books">
          <img src={books} alt="books drawing" />
        </div>

        <div className="info_section">
          <p className="info_header">Projects</p>
          <p className="info_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>
      </div>

      <div className="projects_container_right">
        <div className='project'>
          <p className="project_header">
            <a href="https://github.com/LoganEStack/picture_book" target="_blank" rel="noopener noreferrer">picture_book</a>
          </p>
          <p className="project_description">
            adds AI generated illustrations to books by using topic modeling to determine the central theme of each page
          </p>
        </div>

        <div className='project'>
          <p className="project_header">
            <a href="https://github.com/LoganEStack/FakeFactsBot" target="_blank" rel="noopener noreferrer">Twitter Bot</a>
          </p>
          <p className="project_description">
            twitter bot that tweets comments from reddit.com threads every hour using twitter and reddit API
          </p>
        </div>

        <div className='project'>
          <p className="project_header">
            <a href="" target="_blank" rel="noopener noreferrer">Example</a>
          </p>
          <p className="project_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;