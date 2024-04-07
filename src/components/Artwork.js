import { motion } from 'framer-motion'

export default function Artwork({ src, alt, openPopup }) {
  return (
    <div className='artwork'>
      <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <img src={src} alt={alt} onClick={() => openPopup(src)} />
      </motion.div>
    </div>
  );
};
