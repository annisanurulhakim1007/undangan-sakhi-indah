import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';
import imgCoupleIllustration from "../../assets/pengantin.png";

interface OpeningCoverProps {
  onOpen: () => void;
  guestName?: string;
}

export function OpeningCover({ onOpen, guestName = "Keluarga Besar" }: OpeningCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-700 flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 left-5 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-5 opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white rounded-full"></div>
        </div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-md">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
<div className="text-white/80 mb-2">THE WEDDING OF</div>

        {/* Nama pengantin */}
        <h1 className="text-white text-3xl font-serif mb-4">
          Sakhi & Indah
        </h1>

        <img 
          src={imgCoupleIllustration}
          alt="Couple Illustration"
          className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-white shadow-lg mb-4"
        />
        </motion.div>

        {/* Guest name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-white/80 text-sm mb-2">Kepada Yth.</p>
          <p className="text-white text-xl font-serif mb-4">Bapak/Ibu/Saudara/i</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 inline-block">
            <p className="text-white font-medium">{guestName}</p>
          </div>
        </motion.div>

        {/* Open button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="bg-white text-emerald-700 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Mail className="w-5 h-5" />
          Buka Undangan
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/60 text-sm mt-6"
        >
          
        </motion.p>
      </div>
    </motion.div>
  );
}