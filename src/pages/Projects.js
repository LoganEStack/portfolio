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
            Here's a couple of projects that I've worked on in my free time. I've tried to tackle a number 
            of projects utilizing different technologies in unique personal areas of interest. I've learned
            lots about the technologies involved in ___
            Clicking on the names of these projects will bring you to their respective Github pages.
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
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Something else</a>
          </p>
          <p className="project_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <div className='project'>
          <p className="project_header">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Example</a>
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