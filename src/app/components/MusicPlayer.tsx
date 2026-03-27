import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to autoplay (may be blocked by browser)
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Autoplay was prevented
          console.log('Autoplay prevented:', error);
        }
      }
    };
    
    // Delay to allow user interaction first
    const timer = setTimeout(playAudio, 1000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <Music className="w-5 h-5" />
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      
      {/* Background music - Using a royalty-free Islamic wedding music URL placeholder */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2022/03/15/audio_d1718cece8.mp3"
      />
    </div>
  );
}
