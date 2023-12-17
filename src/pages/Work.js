import car from '../assets/images/car.png';

const Work = () => {
  return (
    <div className="work_container">
      <div className="work_container_left">
        <div className="image_car">
          <img src={car} alt="Car drawing" />
        </div>

        <div className="info_section">
          <p className="info_header">Work</p>
          <p className="info_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>
      </div>
      
      <div className="work_container_right">
        <p className="work_header"><a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer">General Motors</a></p>
        <p className="work_description">Software Engineer <span style={{ "color": "grey" }}>(2022-Present)</span></p>
        <p className="work_description">DevOps Engineer <span style={{ "color": "grey" }}>(2019-2022)</span></p>

        <p className="work_header"><a href="https://www.michelin.com/en/" target="_blank" rel="noopener noreferrer">Michelin</a></p>
        <p className="work_description">Software Engineer Intern <span style={{ "color": "grey" }}>(2018)</span></p>

        <p className="work_header"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a></p>
        <p className="work_description">Software Engineer Intern <span style={{ "color": "grey" }}>(2017)</span></p>
      </div>
    </div>
  )
};

export default Work;