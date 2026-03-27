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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
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
                <h3 className="font-medium text-gray-800 mb-1">Gedung Serbaguna Nurul Iman</h3>
                <p className="text-sm text-gray-600">
                  Jl. Raya Pernikahan No. 125, Jakarta Selatan, DKI Jakarta 12345
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.google.com/?q=-6.2088,106.8456"
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
