import React, { useState } from 'react'

const CustomVideoThumbnail = ({ videoId, aspectRatio, index, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailError, setThumbnailError] = useState(false)

  // YouTube thumbnail URLs (highest quality available)
  const getThumbnailUrl = (videoId) => {
    // Try maxresdefault first, fallback to hqdefault if not available
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  const getFallbackThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  const handleThumbnailClick = () => {
    setIsPlaying(true)
  }

  const handleThumbnailError = () => {
    setThumbnailError(true)
  }

  if (isPlaying) {
    return (
      <div className={`video-container group relative ${aspectRatio || 'aspect-video'} video-glass gpu-accelerated w-full video-container-enhanced`}>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg sm:rounded-xl'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=0&branding=0`}
          title={title || `Project Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        
        {/* Logo masking overlay */}
        <div className="video-logo-mask"></div>
      </div>
    )
  }

  return (
    <div className={`video-container group relative ${aspectRatio || 'aspect-video'} video-glass gpu-accelerated w-full custom-video-thumbnail`}>
      {/* Custom thumbnail without YouTube branding */}
      <img
        src={thumbnailError ? getFallbackThumbnailUrl(videoId) : getThumbnailUrl(videoId)}
        alt={title || `Video thumbnail ${index + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg sm:rounded-xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
        onClick={handleThumbnailClick}
        onError={handleThumbnailError}
        loading="lazy"
      />
      
      {/* Custom play button overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={handleThumbnailClick}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#D3FD50]/90 transition-all duration-300 group-hover:scale-110 glow-accent">
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white group-hover:text-black transition-colors duration-300 ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* Video title overlay */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 rounded-b-lg sm:rounded-b-xl">
          <h3 className="font-[font2] text-sm sm:text-base lg:text-lg text-white uppercase tracking-wide truncate">
            {title}
          </h3>
        </div>
      )}
      
      {/* Hover effect overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg sm:rounded-xl' />
    </div>
  )
}

export default CustomVideoThumbnail