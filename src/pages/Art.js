import { useState } from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'
import Artwork from '../components/Artwork'

import two_piece_abstract from '../assets/images/art/2 Piece Abstract.jpg';
import three_piece_abstract from '../assets/images/art/3 Piece Abstract.jpg';
import bill_murray from '../assets/images/art/Bill Murray.jpg';
import bird_with_arms from '../assets/images/art/Bird with Arms.jpg';
import chaplin from '../assets/images/art/Chaplin.png';
import dog_tags from '../assets/images/art/Dog Tags.png';
import dog from '../assets/images/art/Dog.jpg';
import dragonball from '../assets/images/art/Dragonball.jpg';
import fireball from '../assets/images/art/Fireball.jpg';
import flower from '../assets/images/art/flower.jpg';
import gorilla from '../assets/images/art/Gorilla.png';
import nachopus from '../assets/images/art/Nachopus.jpg';
import six_shooter from '../assets/images/art/Six Shooter.png';
import spiderman from '../assets/images/art/Spiderman vs Wolverine.jpg';
import trex from '../assets/images/art/T-Rex Moped.png';
import toys from '../assets/images/art/Toys.jpg';
import tucan from '../assets/images/art/Tucan.jpg';
import yoshi from '../assets/images/art/Yoshi.jpg';

export default function About() {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

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
        <div className='page_header'><h1>Art</h1></div>

        <div className='flex-container'>
          <section className="info">
            <p style={{'paddingTop': '2rem'}}>
              Creativity is a big part of my life. I love to excercise my skills through a variety of
              mediums; predominantly arcylic and pen and ink. This is a catalog of many of my pieces
              over the past few years. It ranges broadly in terms of both subject and quality. Very
              rarely am I actually making anything for myself, though. I tend to just paint whatever
              I think my friends might like because it makes them smile. A lot of the works in here
              are directly inspired by existing works, as requested by friends. I don't claim any form
              of authorship of those pieces. Take a look around and please let me know what you think!
            </p>
          </section>
          <Row className='art_section'>
            <Row>
              <Col>
                <Artwork src={bill_murray} alt="Bill Murray art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={bird_with_arms} alt="bird with arms art" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={two_piece_abstract} alt="two piece abstract art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={three_piece_abstract} alt="three piece abstract art" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={chaplin} alt="Chaplin art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={dog_tags} alt="dog_tags drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={dog} alt="dog drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={dragonball} alt="dragonball drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={fireball} alt="fireball drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={flower} alt="flower drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={gorilla} alt="gorilla drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={nachopus} alt="nachopus drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={six_shooter} alt="six_shooter drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={spiderman} alt="spiderman drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={trex} alt="trex drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={toys} alt="toys drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={tucan} alt="tucan drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={yoshi} alt="yoshi drawing" openPopup={openPopup} />
              </Col>
            </Row>

            {popupImage && (
              <div className="popup-overlay" onClick={closePopup}>
                <div className="popup-content">
                  <img src={popupImage} alt="Popup" />
                </div>
              </div>
            )}
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};
