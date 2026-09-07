import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SoundProvider } from './context/SoundContext';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBackgroundVideo from './components/HeroBackgroundVideo';

import Home from './pages/Home';
import Voice from './pages/Voice';
import BizIntel from './pages/BizIntel';
import AutoGrowth from './pages/AutoGrowth';
import Vision from './pages/Vision';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollObserver({ pathname }) {
  useEffect(() => {
    // If not a hash navigation, scroll to top on path change
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    // Small delay ensures DOM elements from route/sections are ready
    const timeout = setTimeout(observeElements, 100);

    // Initial hash scroll if provided
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const hashTimeout = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
        clearTimeout(hashTimeout);
      };
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}

export default function App() {
  const [pathname, setPathname] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname.toLowerCase();
  });

  useEffect(() => {
    const handlePopState = () => {
      const current = window.location.pathname.toLowerCase();
      setPathname(current);

      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Determine current view component
  const renderCurrentView = () => {
    switch (pathname) {
      case '/':
      case '':
        return <Home />;
      case '/voice':
        return <Voice />;
      case '/bizintel':
        return <BizIntel />;
      case '/autogrowth':
        return <AutoGrowth />;
      case '/vision':
        return <Vision />;
      case '/terms':
        return <Terms />;
      case '/privacy':
        return <Privacy />;
      case '/contact':
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <SoundProvider>
      {/* 1. Preloader & Entry Flow (runs once on initial load) */}
      <Preloader />

      {/* 2. Persistent Top-Level Background Video (never unmounts or restarts) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <HeroBackgroundVideo />
      </div>

      {/* 3. Global Scroll & Reveal Observer */}
      <ScrollObserver pathname={pathname} />

      {/* 4. Global Persistent Header */}
      <Header />

      {/* 5. Persistent application viewport.
          Route/view content changes inside this mounted app; global systems above remain alive. */}
      <main className="relative z-[1]">
        <div key={pathname} className="route-view-enter">
          {renderCurrentView()}
        </div>
      </main>

      {/* 6. Global Persistent Footer */}
      <Footer />

      {/* 7. Vercel Speed Insights */}
      <SpeedInsights />
    </SoundProvider>
  );
}
