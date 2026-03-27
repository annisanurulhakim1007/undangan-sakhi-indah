import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin } from 'lucide-react';

export function EventDetails() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-lg mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif text-emerald-800 mb-3">
            Waktu & Tempat
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </motion.div>

        {/* Akad Nikah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 text-center">
            <h3 className="text-2xl font-serif mb-1">Akad Nikah</h3>
            <p className="text-emerald-100 text-sm">Ijab Kabul</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Sabtu, 04 April 2026</p>
                <p className="text-sm text-gray-600">16 Syawal 1447 H</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">09:00 - 10:00 WIB</p>
                <p className="text-sm text-gray-600">Waktu Indonesia Barat</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Jl. Dt. Parpatiah nan Sabatang</p>
                <p className="text-sm text-gray-600">
                  Kel. Padang Tangah Payodabar, Kec. Payakumbuh Timur, Kota Payakumbuh, Sumatera Barat
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resepsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 text-center">
            <h3 className="text-2xl font-serif mb-1">Resepsi Pernikahan</h3>
            <p className="text-emerald-100 text-sm">Walimatul Ursy</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Sabtu, 04 April 2026</p>
                <p className="text-sm text-gray-600">16 Syawal 1447 H</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">11:00 - 17:00 WIB</p>
                <p className="text-sm text-gray-600">Waktu Indonesia Barat</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Jl. Dt. Parpatiah nan Sabatang</p>
                <p className="text-sm text-gray-600">
                  Kel. Padang Tangah Payodabar, Kec. Payakumbuh Timur, Kota Payakumbuh, Sumatera Barat
                </p>
              </div>
            </div>    
          </div>
        </motion.div>
      </div>
    </section>
  );
}
