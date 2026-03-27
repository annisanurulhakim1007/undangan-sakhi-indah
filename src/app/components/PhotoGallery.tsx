import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1645732713563-e880df12bde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBpc2xhbWljJTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NjEzNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Masjid'
    },
    {
      url: 'https://images.unsplash.com/photo-1660946214570-f3b89e4eaed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwd2VkZGluZyUyMGRlY29yYXRpb24lMjBmbG93ZXJzfGVufDF8fHx8MTc3NDYxMzUyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Dekorasi'
    },
    {
      url: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwaGFsbCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0NjEzNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Venue'
    }
  ];

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
            Galeri
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                index === 0 ? 'col-span-2' : ''
              } relative overflow-hidden rounded-xl shadow-lg group`}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  height: index === 0 ? '280px' : '200px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-4">{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
