import { motion } from 'framer-motion';

export default function Artwork({ src, src_small, alt, title, openPopup }) {
  return (
    <motion.div
      className="art-item"
      whileHover={{ scale: 1.02 }}
      onClick={() => openPopup(src)}
    >
      <img
        src={src_small}
        alt={alt}
        loading="lazy"
      />
      {title && <div className="art-label">{title}</div>}
    </motion.div>
  );
}
