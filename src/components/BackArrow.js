import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from '../assets/images/svg/arrow.svg'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0, 4, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      }}
    >
      <NavLink to="/">
        <Arrow id="back_arrow" />
      </NavLink>
    </motion.div>
  );
};
