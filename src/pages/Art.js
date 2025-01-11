import { useState } from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'
import Artwork from '../components/Artwork'

import two_piece_abstract from '../assets/images/art/two_piece_abstract.jpg';
import three_piece_abstract from '../assets/images/art/three_piece_abstract.jpg';
import bill_murray from '../assets/images/art/bill_murray.jpg';
import bird_with_arms from '../assets/images/art/bird_with_arms.jpg';
import chaplin from '../assets/images/art/chaplin.png';
import dog_tags from '../assets/images/art/dog_tags.png';
import dog from '../assets/images/art/dog.jpg';
import dragonball from '../assets/images/art/dragonball.jpg';
import fireball from '../assets/images/art/fireball.jpg';
import flower from '../assets/images/art/flower.jpg';
import gorilla from '../assets/images/art/gorilla.png';
import nachopus from '../assets/images/art/nachopus.jpg';
import six_shooter from '../assets/images/art/six_shooter.png';
import spiderman from '../assets/images/art/spiderman_wolverine.jpg';
import trex from '../assets/images/art/trex_moped.png';
import toys from '../assets/images/art/toys.jpg';
import tucan from '../assets/images/art/tucan.jpg';
import yoshi from '../assets/images/art/yoshi.jpg';
import black_bowl from '../assets/images/art/black_bowl.jpg';
import green_cup from '../assets/images/art/green_cup.jpg';
import orange_bowl from '../assets/images/art/orange_bowl.jpg';
import orange_vase from '../assets/images/art/orange_vase.jpg';
import red_bowl from '../assets/images/art/red_bowl.jpg';
import white_cup from '../assets/images/art/white_cup.jpg';

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
              mediums; predominantly pottery, arcylic, and pen & ink. This is a catalog of many of my pieces
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
            <Row>
              <Col>
                <Artwork src={black_bowl} alt="black bowl" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={orange_bowl} alt="orange bowl" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={green_cup} alt="green cup" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={white_cup} alt="white cup" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={red_bowl} alt="red bowl" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={orange_vase} alt="orange vase" openPopup={openPopup} />
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
