'use client';

import { useEffect, useRef, useState } from 'react';

export default function AdBanner({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerId] = useState(() => `container-164e02aec13939cc8449dfef5bd4510d-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Set the container ID that Adsterra expects
      // Note: Adsterra script looks for containers with the base ID
      // We'll set it to the exact ID they expect
      containerRef.current.id = 'container-164e02aec13939cc8449dfef5bd4510d';
      
      // Wait for Adsterra script to load and initialize
      const initAd = () => {
        const script = document.querySelector('script[src*="effectivegatecpm.com"]');
        if (script && containerRef.current) {
          // Check if script has loaded
          const isScriptLoaded = script.getAttribute('data-loaded') === 'true' || 
                                 (script as HTMLScriptElement).readyState === 'complete' ||
                                 (script as HTMLScriptElement).readyState === 'loaded';
          
          if (isScriptLoaded || (window as any).atAsyncOptions) {
            // Script is loaded, Adsterra should populate containers
            // Force a refresh to ensure all containers are found
            if ((window as any).atAsync && typeof (window as any).atAsync === 'function') {
              try {
                (window as any).atAsync();
              } catch (e) {
                // Ignore errors
              }
            }
          }
        }
      };

      // Try multiple times to ensure ad loads
      const timeouts = [
        setTimeout(initAd, 100),
        setTimeout(initAd, 500),
        setTimeout(initAd, 1000),
        setTimeout(initAd, 2000),
        setTimeout(initAd, 3000),
        setTimeout(initAd, 5000),
      ];

      // Listen for script load
      const script = document.querySelector('script[src*="effectivegatecpm.com"]');
      if (script) {
        const handleLoad = () => {
          script.setAttribute('data-loaded', 'true');
          initAd();
        };
        
        if ((script as HTMLScriptElement).readyState === 'complete' || 
            (script as HTMLScriptElement).readyState === 'loaded') {
          handleLoad();
        } else {
          script.addEventListener('load', handleLoad);
          script.addEventListener('error', () => {
            // Script failed to load, but continue trying
          });
        }

        return () => {
          timeouts.forEach(clearTimeout);
          script.removeEventListener('load', handleLoad);
        };
      }

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div ref={containerRef}></div>
    </div>
  );
}

