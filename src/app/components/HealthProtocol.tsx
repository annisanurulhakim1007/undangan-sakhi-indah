import { motion } from 'motion/react';
import { Heart, Shield, Users, Wind } from 'lucide-react';

export function HealthProtocol() {
  const protocols = [
    {
      icon: Shield,
      title: 'Gunakan Masker',
      description: 'Selalu gunakan masker selama acara'
    },
    {
      icon: Users,
      title: 'Jaga Jarak',
      description: 'Jaga jarak minimal 1 meter'
    },
    {
      icon: Wind,
      title: 'Cuci Tangan',
      description: 'Cuci tangan atau gunakan hand sanitizer'
    }
  ];

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
            Protokol Kesehatan
          </h2>
          <p className="text-gray-600 text-sm">
            Demi kenyamanan bersama, mari kita patuhi protokol kesehatan
          </p>
        </motion.div>

        {/* Protocol Cards */}
        <div className="grid grid-cols-1 gap-4">
          {protocols.map((protocol, index) => {
            const Icon = protocol.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-emerald-50 p-4 rounded-lg flex-shrink-0">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{protocol.title}</h3>
                  <p className="text-sm text-gray-600">{protocol.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 text-center border border-emerald-100"
        >
          <p className="text-gray-700 text-sm">
            Untuk yang sedang kurang sehat, kami mohon maaf karena belum bisa menerima kehadiran Anda. Keselamatan dan kesehatan bersama adalah prioritas kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
