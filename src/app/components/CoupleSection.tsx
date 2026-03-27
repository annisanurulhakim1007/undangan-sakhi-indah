import { motion, AnimatePresence } from "framer-motion";
import imgCoupleIllustration from "../../assets/pengantin.png";
import imgBCA from "../../assets/bca.png";
import imgMandiri from "../../assets/mandiri.png";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Nomor rekening disalin!");
};

export function CoupleSection() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-lg mx-auto">
        {/* Couple illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img 
            src={imgCoupleIllustration}
            alt="Couple Illustration"
            className="w-64 h-64 mx-auto object-contain rounded-full"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
        {/* Bride Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-600"
        >
          <div className="text-center">
            <div className="text-emerald-600 text-sm font-medium mb-2">THE BRIDE</div>
            <h2 className="text-3xl font-serif text-gray-800 mb-3">Indah Kurnia Asyura</h2>
            <div className="text-gray-600 text-sm mb-2">
              <p>Putri dari:</p>
              <p className="font-medium mt-1">Bapak Syamsul Bahri & Ibu Linda Yanti</p>
            </div>
            
            {/* Bank (optional) */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <img src={imgBCA} alt="BCA" className="h-10 mx-auto mb-2" />
              <p className="font-medium">Indah Kurnia Asyura</p>
              <p className="text-gray-700 mb-3">6485674997</p>

              <button
                onClick={() => copyToClipboard("6485674997")}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                Salin No. Rekening
              </button>
            </div>
          </div>
        </motion.div>

        {/* Groom Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-t-4 border-emerald-600"
        >
          <div className="text-center">
            <div className="text-emerald-600 text-sm font-medium mb-2">THE GROOM</div>
            <h2 className="text-3xl font-serif text-gray-800 mb-3">Ahmad Saakhi</h2>
            <div className="text-gray-600 text-sm mb-2">
              <p>Putra dari:</p>
              <p className="font-medium mt-1">Bapak Ahmad Siddiq & Ibu Susi Yemita</p>
            </div>
            
            {/* Bank (optional) */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <img src={imgMandiri} alt="Mandiri" className="h-10 mx-auto mb-2" />
              <p className="font-medium">Ahmad Saakhi</p>
              <p className="text-gray-700 mb-3">1110019317854</p>

              <button
                onClick={() => copyToClipboard("1110019317854")}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                Salin No. Rekening
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
