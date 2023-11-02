'use client';
import React, { useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.src = src;
          observer.unobserve(videoRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default LazyVideo;
