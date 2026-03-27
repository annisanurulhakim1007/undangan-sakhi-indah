import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const weddingDate = new Date('2026-04-04T09:00:00').getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds }
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-serif text-emerald-800 mb-2">
            Menuju Hari Bahagia
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-3">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-4 border-t-2 border-emerald-500"
            >
              <div className="text-3xl font-bold text-emerald-700 mb-1">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600">
                {block.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}