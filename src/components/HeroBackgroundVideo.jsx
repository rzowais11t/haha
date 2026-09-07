import { useEffect, useRef } from 'react';

export default function HeroBackgroundVideo({ className = '' }) {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  useEffect(() => {
    [mobileVideoRef.current, desktopVideoRef.current].forEach((video) => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Hero background video play failed:', err);
          });
        }
      }
    });
  }, []);

  return (
    <div className={`absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Mobile Video (Phones: < 768px) */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/ah.mp4" type="video/mp4" />
      </video>

      {/* Desktop & Tablet Video (Tablets & Big Screens: >= 768px) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/dk.mp4" type="video/mp4" />
      </video>

      {/* Subtle light transparent blur overlay over video */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px] z-[1]"></div>
    </div>
  );
}
