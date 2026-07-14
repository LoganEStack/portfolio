import { useState } from 'react';
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';
import BackArrow from '../components/BackArrow'
import Artwork from '../components/Artwork'
import PageFooter from '../components/PageFooter'

import two_piece_abstract from '../assets/images/art/two_piece_abstract.jpg';
import two_piece_abstract_small from '../assets/images/art/two_piece_abstract_small.jpg';
import three_piece_abstract from '../assets/images/art/three_piece_abstract.jpg';
import three_piece_abstract_small from '../assets/images/art/three_piece_abstract_small.jpg';
import bill_murray from '../assets/images/art/bill_murray.jpg';
import bill_murray_small from '../assets/images/art/bill_murray_small.jpg';
import bird_with_arms from '../assets/images/art/bird_with_arms.jpg';
import bird_with_arms_small from '../assets/images/art/bird_with_arms_small.jpg';
import chaplin from '../assets/images/art/chaplin.png';
import chaplin_small from '../assets/images/art/chaplin_small.jpg';
import dog_tags from '../assets/images/art/dog_tags.png';
import dog_tags_small from '../assets/images/art/dog_tags_small.jpg';
import loki from '../assets/images/art/loki.jpg';
import loki_small from '../assets/images/art/loki_small.jpg';
import dragonball from '../assets/images/art/dragonball.jpg';
import dragonball_small from '../assets/images/art/dragonball_small.jpg';
import fireball from '../assets/images/art/fireball.jpg';
import fireball_small from '../assets/images/art/fireball_small.jpg';
import flower from '../assets/images/art/flower.jpg';
import flower_small from '../assets/images/art/flower_small.jpg';
import gorilla from '../assets/images/art/gorilla.png';
import gorilla_small from '../assets/images/art/gorilla_small.jpg';
import nachopus from '../assets/images/art/nachopus.jpg';
import nachopus_small from '../assets/images/art/nachopus_small.jpg';
import six_shooter from '../assets/images/art/six_shooter.png';
import six_shooter_small from '../assets/images/art/six_shooter_small.jpg';
import space_ollie from '../assets/images/art/space_ollie.png';
import space_ollie_small from '../assets/images/art/space_ollie_small.png';
import spiderman from '../assets/images/art/spiderman_wolverine.jpg';
import spiderman_small from '../assets/images/art/spiderman_wolverine_small.jpg';
import trex from '../assets/images/art/trex_moped.png';
import trex_small from '../assets/images/art/trex_moped_small.jpg';
import toys from '../assets/images/art/toys.jpg';
import toys_small from '../assets/images/art/toys_small.jpg';
import tucan from '../assets/images/art/tucan.jpg';
import tucan_small from '../assets/images/art/tucan_small.jpg';
import yoshi from '../assets/images/art/yoshi.jpg';
import yoshi_small from '../assets/images/art/yoshi_small.jpg';
import black_bowl from '../assets/images/art/black_bowl.jpg';
import black_bowl_small from '../assets/images/art/black_bowl_small.jpg';
import green_mug from '../assets/images/art/green_mug.jpg';
import green_mug_small from '../assets/images/art/green_mug_small.jpg';
import orange_bowl from '../assets/images/art/orange_bowl.jpg';
import orange_bowl_small from '../assets/images/art/orange_bowl_small.jpg';
import orange_vase from '../assets/images/art/orange_vase.jpg';
import orange_vase_small from '../assets/images/art/orange_vase_small.jpg';
import red_bowl from '../assets/images/art/red_bowl.jpg';
import red_bowl_small from '../assets/images/art/red_bowl_small.jpg';
import white_mug from '../assets/images/art/white_mug.jpg';
import white_mug_small from '../assets/images/art/white_mug_small.jpg';
import porto_rico from '../assets/images/art/porto_rico.png';
import porto_rico_small from '../assets/images/art/porto_rico_small.png';
import venieros from '../assets/images/art/venieros.png';
import venieros_small from '../assets/images/art/venieros_small.png';
import smalls from '../assets/images/art/smalls.png';
import smalls_small from '../assets/images/art/smalls_small.png';
import the_strand from '../assets/images/art/the_strand.png';
import the_strand_small from '../assets/images/art/the_strand_small.png';
import seagrass from '../assets/images/art/seagrass.png';
import seagrass_small from '../assets/images/art/seagrass_small.png';
import pink_mug from '../assets/images/art/pink_mug.jpg';
import pink_mug_small from '../assets/images/art/pink_mug_small.png';
import shot_glasses from '../assets/images/art/shot_glasses.jpg';
import shot_glasses_small from '../assets/images/art/shot_glasses_small.png';
import large_abstract from '../assets/images/art/large_abstract.png';
import large_abstract_small from '../assets/images/art/large_abstract_small.png';
import hobbit_hole from '../assets/images/art/hobbit_hole.png';
import hobbit_hole_small from '../assets/images/art/hobbit_hole_small.png';


const artworks = [
  { title: 'Hobbit Hole', src: hobbit_hole, small: hobbit_hole_small },
  { title: 'Bill Murray - Abstract', src: bill_murray, small: bill_murray_small },
  { title: 'A Cup of Tea', src: bird_with_arms, small: bird_with_arms_small },
  { title: 'Two Piece Abstract', src: two_piece_abstract, small: two_piece_abstract_small },
  { title: 'Three Piece Abstract', src: three_piece_abstract, small: three_piece_abstract_small },
  { title: 'Chaplin', src: chaplin, small: chaplin_small },
  { title: 'Dog Tags', src: dog_tags, small: dog_tags_small },
  { title: 'Loki', src: loki, small: loki_small },
  { title: 'Spiderman & Wolverine', src: spiderman, small: spiderman_small },
  { title: 'Fireball on Wood', src: fireball, small: fireball_small },
  { title: 'Flower - Watercolor', src: flower, small: flower_small },
  { title: 'Ape', src: gorilla, small: gorilla_small },
  { title: 'Space Ollie', src: space_ollie, small: space_ollie_small },
  { title: 'Nachopus', src: nachopus, small: nachopus_small },
  { title: 'Six Shooter', src: six_shooter, small: six_shooter_small },
  { title: 'Abstract', src: large_abstract, small: large_abstract_small },
  { title: 'Porto Rico', src: porto_rico, small: porto_rico_small },
  { title: 'Veniero\'s', src: venieros, small: venieros_small },
  { title: 'Smalls', src: smalls, small: smalls_small },
  { title: 'The Strand', src: the_strand, small: the_strand_small },
  { title: 'Seagrass', src: seagrass, small: seagrass_small },
  { title: 'Dragonball', src: dragonball, small: dragonball_small },
  { title: 'Follow Your Dreams', src: trex, small: trex_small },
  { title: 'Toys', src: toys, small: toys_small },
  { title: 'Tucan Bam', src: tucan, small: tucan_small },
  { title: 'Yoshi', src: yoshi, small: yoshi_small },
  { title: 'Black Bowl', src: black_bowl, small: black_bowl_small },
  { title: 'Green Mug', src: green_mug, small: green_mug_small },
  { title: 'Orange Bowl', src: orange_bowl, small: orange_bowl_small },
  { title: 'Layered Orange Vase', src: orange_vase, small: orange_vase_small },
  { title: 'Red Bowl', src: red_bowl, small: red_bowl_small },
  { title: 'White Mug', src: white_mug, small: white_mug_small },
  { title: 'Pink Mug', src: pink_mug, small: pink_mug_small },
  { title: 'Shot Glasses', src: shot_glasses, small: shot_glasses_small },
];

export default function Art() {
  const [popupImage, setPopupImage] = useState(null);

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
      <Container fluid className="page-container invert-theme">
        <div className="scroll-wrapper">
          <BackArrow />
          <div className='page-header'>
            <h1>
              Art
              <div className='line_break'></div>
            </h1>
          </div>

          <div className='page-body'>
            <section className="content">
              <p>
                Creativity is a big part of my life. I love to excercise my skills through a variety of
                mediums: predominantly pottery, arcylic, and pen & ink.
              </p>
              <p>
                This is a catalog of many of my pieces over the past few years. It ranges broadly in terms
                of both subject and quality. I tend to just paint whatever I think might make my friends happy.
              </p>
              <p>
                A lot of the works in here are directly inspired by or recreations of existing works, as
                requested by friends. I don't claim any form of ownership over those pieces.
              </p>
            </section>

            <div className="art-masonry">
              {artworks.map((art) => (
                <Artwork
                  key={art.title}
                  title={art.title}
                  src={art.src}
                  src_small={art.small}
                  alt={`${art.title} art`}
                  openPopup={setPopupImage}
                />
              ))}
            </div>
          </div>
          <PageFooter />
        </div>

        {popupImage && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content">
              <img src={popupImage} alt="Popup" />
            </div>
          </div>
        )}
      </Container>
    </motion.div>
  );
};
