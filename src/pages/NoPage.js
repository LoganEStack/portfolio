import question_mark from '../assets/images/question_mark.png';

const NoPage = () => {
  return (
    <div className="home_container">
      <div className="home_container_left">
        <div className="info_section">
          <p className="info_header">404</p>
          <p className="info_description">
            Couldn't find the page you're looking for. Please click one of the navigation links at the top of the page.
          </p>
        </div>
      </div>
      <div className='home_container_right'>
        <img className="question_mark" src={question_mark} alt="question mark art"></img>
      </div>
    </div>
  );
};

export default NoPage;