import { useGSAP } from '@gsap/react'
import VideoGrid from '../components/projects/VideoGrid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PageWrapper from '../components/common/PageWrapper'

/**
 * Projects component - Now displays YouTube videos in a responsive grid
 * 
 * Key changes from original:
 * - Replaced image URLs with YouTube video IDs
 * - Updated layout to support 3-4 videos per row on desktop, 2 on tablet, 1 on mobile
 * - Removed "Voir le projet" overlay (not needed for videos)
 * - Added proper spacing and responsive design for video content
 * - Structured to easily support 31+ videos without layout issues
 */
const Projects = () => {

  // Teasers section - replaced with provided video IDs
  const teasers = [
    { videoId: 'QGsa5QB5gK4', title: 'Wedding Teaser 1' },
    { videoId: '5fR4MErzYeI', title: 'Wedding Teaser 2' },
    { videoId: '2qFnRXpSFn8', title: 'Wedding Teaser 3' },
    { videoId: '7bZ5MKY6pfU', title: 'Wedding Teaser 4' },
    { videoId: 'QstSPHan4oE', title: 'Wedding Teaser 5' },
    { videoId: 'HMJyD-kPWek', title: 'Wedding Teaser 6' },
    { videoId: 'zd5De3LAMQc', title: 'Wedding Teaser 7' },
    { videoId: 'HMJyD-kPWek', title: 'Wedding Teaser 8' },
    { videoId: 'YM1TZnbcbOs', title: 'Wedding Teaser 9' },
    { videoId: 'pRya97qUJMs', title: 'Wedding Teaser 10' },
    { videoId: 'AqqGxOrwv_g', title: 'Wedding Teaser 11' }
  ]

  // Highlights section - starts with last provided videoId, rest unchanged
  const highlights = [
    { videoId: '2qFnRXpSFn8', title: 'Wedding Highlight 1' },
    { videoId: 'CevxZvSJLk8', title: 'Wedding Highlight 2' },
    { videoId: 'kffacxfA7G4', title: 'Wedding Highlight 3' },
    { videoId: 'qeMFqkcPYcg', title: 'Wedding Highlight 4' },
    { videoId: 'SQoA_wjmE9w', title: 'Wedding Highlight 5' },
    { videoId: 'ZbZSe6N_BXs', title: 'Wedding Highlight 6' },
    { videoId: 'HEXWRTEbj1I', title: 'Wedding Highlight 7' },
    { videoId: 'U9t-slLl69E', title: 'Wedding Highlight 8' },
    { videoId: 'iik25wqIuFo', title: 'Wedding Highlight 9' },
    { videoId: 'C0DPdy98e4c', title: 'Wedding Highlight 10' },
    { videoId: 'YQHsXMglC9A', title: 'Wedding Highlight 11' },
    { videoId: 'AdUw5RdyZxI', title: 'Wedding Highlight 12' },
    { videoId: 'hTWKbfoikeg', title: 'Wedding Highlight 13' },
    { videoId: 'NUYvbT6vTPs', title: 'Wedding Highlight 14' },
    { videoId: 'RgKAFK5djSk', title: 'Wedding Highlight 15' },
    { videoId: 'uelHwf8o7_U', title: 'Wedding Highlight 16' },
    { videoId: 'EhxJLojIE_o', title: 'Wedding Highlight 17' },
    { videoId: 'KQ6zr6kCPj8', title: 'Wedding Highlight 18' },
    { videoId: 'MtN1YnoL46Q', title: 'Wedding Highlight 19' },
    { videoId: 'sOnqjkJTMaA', title: 'Wedding Highlight 20' }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.fromTo('.video-container', 
      {
        opacity: 0,
        scale: 0.95,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.video-container',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.section-title',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <PageWrapper className='section-dark'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding mb-[30vh] sm:mb-[40vh] lg:mb-[50vh]'>
      {/* Page Header */}
      <div className='pt-[25vh] sm:pt-[30vh] lg:pt-[35vh] component-margin text-center'>
        <h1 className='font-[font2] heading-responsive-xl uppercase text-white text-layer-3 text-glow'>
          Projets
        </h1>
      </div>

      <div className='projects-content space-y-16 sm:space-y-24 lg:space-y-32'>
        {/* Teasers Section */}
        <section className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12'>
          <h2 className='section-title font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-center text-layer-2 text-glow'>
            Teasers
          </h2>
          <VideoGrid 
            videos={teasers} 
            gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            aspectRatio="aspect-video"
            useCustomThumbnails={true}
          />
        </section>

        {/* Highlights Section */}
        <section className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12'>
          <h2 className='section-title font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-center text-layer-2 text-glow'>
            Highlights
          </h2>
          <VideoGrid 
            videos={highlights} 
            gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            aspectRatio="aspect-video"
            useCustomThumbnails={true}
          />
        </section>
      </div>
      </div>
    </PageWrapper>
  )
}

export default Projects
