import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function LocationMap() {
  return (
    <section className="relative py-16 px-6 bg-white">
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
            Lokasi Acara
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Google Maps iframe placeholder */}
          <div className="w-full h-64 bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1774620299767!6m8!1m7!1sSR9aZbfWIFnhTwoSVfyZSg!2m2!1d-0.2373563550666614!2d100.6488127842964!3f334.92!4f-11.420000000000002!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Pernikahan"
            ></iframe>
          </div>
          
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-emerald-50 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Jl. Dt. Parpatiah nan Sabatang</h3>
                <p className="text-sm text-gray-600">
                  Kel. Padang Tangah Payodabar, Kec. Payakumbuh Timur, Kota Payakumbuh, Sumatera Barat
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.app.goo.gl/gTKEKvdPygmgHJFT9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-lg transition-colors duration-300"
            >
              Buka di Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
