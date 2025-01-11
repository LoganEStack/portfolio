import { motion } from 'framer-motion'

export default function Artwork({ src, src_small, alt, openPopup }) {
  return (
    <div className='artwork'>
      <motion.div whileHover={{ scale: 1.05 }}>
        <img 
          src={src_small} 
          alt={alt} 
          loading="lazy" 
          onClick={() => openPopup(src)} 
        />
      </motion.div>
    </div>
  );
};
