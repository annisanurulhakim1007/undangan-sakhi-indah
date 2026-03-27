import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { OpeningCover } from './components/OpeningCover';
import { NewHeroSection } from './components/NewHeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { SaveTheDate } from './components/SaveTheDate';
import { CoupleSection } from './components/CoupleSection';
import { QuranVerse } from './components/QuranVerse';
import { EventDetails } from './components/EventDetails';
import { LocationMap } from './components/LocationMap';
import { PhotoGallery } from './components/PhotoGallery';
import { HealthProtocol } from './components/HealthProtocol';
import { NewClosingSection } from './components/NewClosingSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get guest name from URL parameter (e.g., ?to=Keluarga+Besar)
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Undangan';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <OpeningCover 
            key="cover" 
            onOpen={() => setIsOpen(true)}
            guestName={guestName}
          />
        )}
      </AnimatePresence>
      
      {isOpen && (
        <>
          {/* Music Player */}
          <MusicPlayer />
          
          {/* Main Content */}
          <main className="w-full">
            <NewHeroSection />
            <CountdownTimer />
            <SaveTheDate />
            <CoupleSection />
            <QuranVerse />
            <EventDetails />
            <LocationMap />
            <PhotoGallery />
            <HealthProtocol />
            <NewClosingSection />
          </main>
        </>
      )}
    </div>
  );
}