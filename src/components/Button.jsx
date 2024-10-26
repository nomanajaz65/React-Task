import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ onClick, children }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="my-button"
    >
      {children}
    </motion.button>
  );
};

export default Button;
