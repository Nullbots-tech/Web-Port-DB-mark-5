import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1
        } 
      }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(14, 165, 233, 0.1), 0 10px 10px -5px rgba(14, 165, 233, 0.04)'
      }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-600/40 transition-all duration-300"
    >
      <motion.div 
        className="flex justify-center items-center w-16 h-16 rounded-lg bg-cyan-900/20 text-cyan-400 mb-6"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;