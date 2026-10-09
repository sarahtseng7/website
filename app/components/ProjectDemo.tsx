"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ProjectDemoProps {
  src: string;
  poster: string;
  alt: string;
}

export function ProjectDemo({ src, poster, alt }: ProjectDemoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="project-demo">
      <div className="project-demo-frame">
        <Image
          src={playing ? src : poster}
          alt={alt}
          width={1280}
          height={720}
          sizes="(max-width: 720px) 100vw, 50vw"
          unoptimized
          className="project-demo-image"
        />
      </div>
      <div className="project-demo-controls">
        <button
          type="button"
          className="project-demo-toggle"
          aria-pressed={playing}
          aria-label={`${playing ? 'Stop' : 'Play'} ${alt}`}
          onClick={() => setPlaying(!playing)}
        >
          <span aria-hidden="true">{playing ? '■' : '▶'}</span>
          {playing ? 'Stop demo' : 'Play demo'}
        </button>
        <a href={src} target="_blank" rel="noopener noreferrer" className="project-link">
          View full size ↗
        </a>
      </div>
    </div>
  );
}
