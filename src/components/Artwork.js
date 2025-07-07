import { motion } from 'framer-motion';

export default function Artwork({ src, src_small, alt, openPopup }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="artwork" onClick={() => openPopup(src)}>
        <div className="artwork-container">
          <img
            src={src_small}
            alt={alt}
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}
