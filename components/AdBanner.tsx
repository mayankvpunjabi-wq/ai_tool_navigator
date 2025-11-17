'use client';

import { useEffect, useRef } from 'react';

// Global flag to ensure script loads only once
let scriptLoaded = false;

export default function AdBanner({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Adsterra script only once
    if (!scriptLoaded && typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src*="effectivegatecpm.com"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = '//pl28075472.effectivegatecpm.com/164e02aec13939cc8449dfef5bd4510d/invoke.js';
        document.body.appendChild(script);
        scriptLoaded = true;
      } else {
        scriptLoaded = true;
      }
    }

    // Set the container ID that Adsterra expects (same ID for all instances)
    if (containerRef.current) {
      containerRef.current.id = 'container-164e02aec13939cc8449dfef5bd4510d';
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div ref={containerRef}></div>
    </div>
  );
}

