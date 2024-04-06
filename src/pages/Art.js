import { useState } from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackArrow from '../components/BackArrow'

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

export default function Art() {
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
        <div className='flex-container'>
          <Row>
            <section className="info">
              <div className='info_header'>Art</div>
            </section>
          </Row>
          <Row>
            <Col>
              <div className="artwork_scroll_box">
                <div class="scrollbar" id="scrollbar1">
                  <div className='artwork'>
                    <img src={bill_murray} alt="Bill Murray art" onClick={() => openPopup(bill_murray)} />
                  </div>

                  <div className='artwork'>
                    <img src={bird_with_arms} alt="bird with arms art" onClick={() => openPopup(bird_with_arms)} />
                  </div>

                  <div className='artwork'>
                    <img src={two_piece_abstract} alt="two piece abstract art" onClick={() => openPopup(two_piece_abstract)} />
                  </div>

                  <div className='artwork'>
                    <img src={three_piece_abstract} alt="three piece abstract art" onClick={() => openPopup(three_piece_abstract)} />
                  </div>

                  <div className='artwork'>
                    <img src={chaplin} alt="Chaplin art" onClick={() => openPopup(chaplin)} />
                  </div>

                  <div className='artwork'>
                    <img src={dog_tags} alt="dog_tags drawing" onClick={() => openPopup(dog_tags)} />
                  </div>

                  <div className='artwork'>
                    <img src={dog} alt="dog drawing" onClick={() => openPopup(dog)} />
                  </div>

                  <div className='artwork'>
                    <img src={dragonball} alt="dragonball drawing" onClick={() => openPopup(dragonball)} />
                  </div>

                  <div className='artwork'>
                    <img src={fireball} alt="fireball drawing" onClick={() => openPopup(fireball)} />
                  </div>

                  <div className='artwork'>
                    <img src={flower} alt="flower drawing" onClick={() => openPopup(flower)} />
                  </div>

                  <div className='artwork'>
                    <img src={gorilla} alt="gorilla drawing" onClick={() => openPopup(gorilla)} />
                  </div>

                  <div className='artwork'>
                    <img src={nachopus} alt="nachopus drawing" onClick={() => openPopup(nachopus)} />
                  </div>

                  <div className='artwork'>
                    <img src={six_shooter} alt="six_shooter drawing" onClick={() => openPopup(six_shooter)} />
                  </div>

                  <div className='artwork'>
                    <img src={spiderman} alt="spiderman drawing" onClick={() => openPopup(spiderman)} />
                  </div>

                  <div className='artwork'>
                    <img src={trex} alt="trex drawing" onClick={() => openPopup(trex)} />
                  </div>

                  <div className='artwork'>
                    <img src={toys} alt="toys drawing" onClick={() => openPopup(toys)} />
                  </div>

                  <div className='artwork'>
                    <img src={tucan} alt="tucan drawing" onClick={() => openPopup(tucan)} />
                  </div>

                  <div className='artwork'>
                    <img src={yoshi} alt="yoshi drawing" onClick={() => openPopup(yoshi)} />
                  </div>

                  {popupImage && (
                    <div className="popup-overlay" onClick={closePopup}>
                      <div className="popup-content">
                        <img src={popupImage} alt="Popup" />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};
