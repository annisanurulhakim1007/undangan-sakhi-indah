import { motion, AnimatePresence } from "framer-motion";
import { Heart } from 'lucide-react';

export function NewClosingSection() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heart Icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-full">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </motion.div>

          {/* Thank you message */}
          <h2 className="text-2xl font-serif text-emerald-800 mb-6">
            Merupakan Suatu Kehormatan dan Kebahagiaan Bagi Kami
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Atas kehadiran dan doa restu dari Bapak/Ibu/Saudara/i sekalian, kami ucapkan terima kasih.
          </p>

          {/* Closing Message */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
            <p className="text-emerald-800 font-serif mb-4 leading-relaxed">
              "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan mengumpulkan kalian berdua dalam kebaikan"
            </p>
            <p className="text-sm text-gray-600">
              (Doa Pernikahan)
            </p>
          </div>

          {/* Names */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-3">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <div className="text-emerald-800 font-serif text-2xl mb-2">
              Kami yang berbahagia,
            </div>
            <div className="flex items-center justify-center gap-2 text-emerald-800 font-serif text-xl">
              <span>Sakhi</span>
              <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600" />
              <span>Indah</span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-sm text-gray-600 mb-2">
              Made with <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> for our special day
            </p>
            <p className="text-xs text-gray-500">
              © 2026 Sakhi & Indah Wedding
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
