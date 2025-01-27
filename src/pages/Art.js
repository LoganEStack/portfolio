import { useState } from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'
import Artwork from '../components/Artwork'

import two_piece_abstract from '../assets/images/art/two_piece_abstract.jpg';
import two_piece_abstract_small  from '../assets/images/art/two_piece_abstract_small.jpg';
import three_piece_abstract from '../assets/images/art/three_piece_abstract.jpg';
import three_piece_abstract_small  from '../assets/images/art/three_piece_abstract_small.jpg';
import bill_murray from '../assets/images/art/bill_murray.jpg';
import bill_murray_small  from '../assets/images/art/bill_murray_small.jpg';
import bird_with_arms from '../assets/images/art/bird_with_arms.jpg';
import bird_with_arms_small from '../assets/images/art/bird_with_arms_small.jpg';
import chaplin from '../assets/images/art/chaplin.png';
import chaplin_small  from '../assets/images/art/chaplin_small.jpg';
import dog_tags from '../assets/images/art/dog_tags.png';
import dog_tags_small  from '../assets/images/art/dog_tags_small.jpg';
import dog from '../assets/images/art/dog.jpg';
import dog_small  from '../assets/images/art/dog_small.jpg';
import dragonball from '../assets/images/art/dragonball.jpg';
import dragonball_small  from '../assets/images/art/dragonball_small.jpg';
import fireball from '../assets/images/art/fireball.jpg';
import fireball_small  from '../assets/images/art/fireball_small.jpg';
import flower from '../assets/images/art/flower.jpg';
import flower_small  from '../assets/images/art/flower_small.jpg';
import gorilla from '../assets/images/art/gorilla.png';
import gorilla_small  from '../assets/images/art/gorilla_small.jpg';
import nachopus from '../assets/images/art/nachopus.jpg';
import nachopus_small  from '../assets/images/art/nachopus_small.jpg';
import six_shooter from '../assets/images/art/six_shooter.png';
import six_shooter_small  from '../assets/images/art/six_shooter_small.jpg';
import spiderman from '../assets/images/art/spiderman_wolverine.jpg';
import spiderman_small  from '../assets/images/art/spiderman_wolverine_small.jpg';
import trex from '../assets/images/art/trex_moped.png';
import trex_small  from '../assets/images/art/trex_moped_small.jpg';
import toys from '../assets/images/art/toys.jpg';
import toys_small  from '../assets/images/art/toys_small.jpg';
import tucan from '../assets/images/art/tucan.jpg';
import tucan_small  from '../assets/images/art/tucan_small.jpg';
import yoshi from '../assets/images/art/yoshi.jpg';
import yoshi_small  from '../assets/images/art/yoshi_small.jpg';
import black_bowl from '../assets/images/art/black_bowl.jpg';
import black_bowl_small  from '../assets/images/art/black_bowl_small.jpg';
import green_cup from '../assets/images/art/green_cup.jpg';
import green_cup_small  from '../assets/images/art/green_cup_small.jpg';
import orange_bowl from '../assets/images/art/orange_bowl.jpg';
import orange_bowl_small  from '../assets/images/art/orange_bowl_small.jpg';
import orange_vase from '../assets/images/art/orange_vase.jpg';
import orange_vase_small  from '../assets/images/art/orange_vase_small.jpg';
import red_bowl from '../assets/images/art/red_bowl.jpg';
import red_bowl_small  from '../assets/images/art/red_bowl_small.jpg';
import white_cup from '../assets/images/art/white_cup.jpg';
import white_cup_small  from '../assets/images/art/white_cup_small.jpg';

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
                <Artwork src={bill_murray} src_small={bill_murray_small} alt="Bill Murray art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={bird_with_arms} src_small={bird_with_arms_small} alt="bird with arms art" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={two_piece_abstract} src_small={two_piece_abstract_small} alt="two piece abstract art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={three_piece_abstract} src_small={three_piece_abstract_small} alt="three piece abstract art" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={chaplin} src_small={chaplin_small} alt="Chaplin art" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={dog_tags} src_small={dog_tags_small} alt="dog_tags drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={dog} src_small={dog_small} alt="dog drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={dragonball} src_small={dragonball_small} alt="dragonball drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={fireball} src_small={fireball_small} alt="fireball drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={flower} src_small={flower_small} alt="flower drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={gorilla} src_small={gorilla_small} alt="gorilla drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={nachopus} src_small={nachopus_small} alt="nachopus drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={six_shooter} src_small={six_shooter_small} alt="six_shooter drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={spiderman} src_small={spiderman_small} alt="spiderman drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={trex} src_small={trex_small} alt="trex drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={toys} src_small={toys_small} alt="toys drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={tucan} src_small={tucan_small} alt="tucan drawing" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={yoshi} src_small={yoshi_small} alt="yoshi drawing" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={black_bowl} src_small={black_bowl_small} alt="black bowl" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={orange_bowl} src_small={orange_bowl_small} alt="orange bowl" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={green_cup} src_small={green_cup_small} alt="green cup" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={white_cup} src_small={white_cup_small} alt="white cup" openPopup={openPopup} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Artwork src={red_bowl} src_small={red_bowl_small} alt="red bowl" openPopup={openPopup} />
              </Col>
              <Col>
                <Artwork src={orange_vase} src_small={orange_vase_small} alt="orange vase" openPopup={openPopup} />
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
        <div className="page-footer">© 2025 Logan Stack</div>
      </Container>
    </motion.div>
  );
};
