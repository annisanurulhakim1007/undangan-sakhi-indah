import { motion, AnimatePresence } from "framer-motion";
import imgNamesCalligraphy from "../../assets/walimatul.png";
import imgBismillah from "../../assets/bismillah.png";

export function NewHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Floral background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0C50 27.614 27.614 50 0 50c27.614 0 50 22.386 50 50 0-27.614 22.386-50 50-50-27.614 0-50-22.386-50-50z' fill='%23047857' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating ornaments */}
      <motion.div
        className="absolute top-20 left-5 opacity-10"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 border-2 border-emerald-600 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-5 opacity-10"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-20 h-20 border-2 border-emerald-600 rounded-full"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 py-16 max-w-lg">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <img 
            src={imgBismillah}
            alt="Bismillahirrahmanirrahim"
            className="w-64 mx-auto"
          />
        </motion.div>

        {/* Opening text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. 
            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan 
            di antara putra-putri kami:
          </p>
        </motion.div>

        {/* Names in Arabic Calligraphy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <img 
            src={imgNamesCalligraphy}
            alt="Saakhi & Indah"
            className="w-72 mx-auto"
          />
        </motion.div>

        {/* Couple names in Latin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl font-serif text-emerald-800 mb-2">
              Ahmad Saakhi
            </h1>
            <p className="text-gray-600 text-sm">Putra dari Bapak Ahmad Siddiq & Ibu Susi Yemita</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="text-3xl text-emerald-600">&</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
          
          <div>
            <h1 className="text-4xl font-serif text-emerald-800 mb-2">
              Indah Kurnia Asyura
            </h1>
            <p className="text-gray-600 text-sm">Putri dari Bapak Syamsul Bahri & Ibu Linda Yanti</p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}