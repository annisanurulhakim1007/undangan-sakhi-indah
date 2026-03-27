import { motion } from 'motion/react';
import { Calendar, Download } from 'lucide-react';

export function SaveTheDate() {
  const handleAddToCalendar = () => {
    // Create ICS file content
    const event = {
      title: 'Pernikahan Sakhi & Indah',
      description: 'Akad Nikah dan Resepsi Pernikahan',
      location: 'Jl. Dt. Parpatiah nan Sabatang',
      start: '20260615T080000',
      end: '20260615T140000'
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wedding-yohanes-feres.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative py-12 px-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <Calendar className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-serif mb-3">Save The Date</h3>
          <p className="text-emerald-100 mb-6 text-sm">
            Jangan sampai terlewat! Simpan tanggal acara kami ke kalender Anda
          </p>
          <button
            onClick={handleAddToCalendar}
            className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Tambahkan ke Kalender
          </button>
        </motion.div>
      </div>
    </section>
  );
}
