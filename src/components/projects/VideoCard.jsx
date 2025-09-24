import React from 'react'

const VideoCard = ({ videoId, aspectRatio, index }) => {
  return (
    <div className={`video-container group relative ${aspectRatio || 'aspect-video'} video-glass gpu-accelerated w-full`}>
      {/* Custom thumbnail overlay to hide YouTube logo */}
      <div className="absolute inset-0 z-20 pointer-events-none rounded-lg sm:rounded-xl overflow-hidden">
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-16 h-6 sm:w-20 sm:h-8 bg-black/80 backdrop-blur-sm rounded-sm"></div>
      </div>
      
      {/* YouTube iframe embed with responsive 16:9 aspect ratio */}
      <iframe
        className='absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1`}
        title={`Project Video ${index + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        onLoad={() => {
          // Additional logo hiding via CSS injection
          const iframe = document.querySelector(`iframe[title="Project Video ${index + 1}"]`);
          if (iframe) {
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
              const style = iframeDoc.createElement('style');
              style.textContent = `
                .ytp-watermark,
                .ytp-chrome-top-buttons,
                .ytp-show-cards-title,
                .ytp-pause-overlay,
                .ytp-impression-link {
                  display: none !important;
                }
              `;
              iframeDoc.head.appendChild(style);
            } catch (e) {
              // Cross-origin restrictions prevent direct manipulation
              console.log('Cross-origin restrictions prevent logo removal via iframe manipulation');
            }
          }
        }}
      />
      
      {/* Subtle hover effect overlay - minimal to not interfere with video controls */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg sm:rounded-xl' />
      
      {/* Additional logo masking overlay */}
      <div className="absolute top-0 right-0 w-20 h-12 sm:w-24 sm:h-14 bg-gradient-to-bl from-black/60 via-black/30 to-transparent pointer-events-none rounded-lg sm:rounded-xl"></div>
    </div>
  )
}

export default VideoCard