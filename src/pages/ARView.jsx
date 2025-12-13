/*
 * This module uses MindARThree for playing a video on particular image (Image Tracking).
 */

import { useRef, useEffect, useState } from 'react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js'
import * as THREE from 'three'
import { ExternalLink } from 'lucide-react'

export default function ARView() {
  const containerRef = useRef(null)
  const [showMessage, setShowMessage] = useState(true)
  const [showHomeButton, setShowHomeButton] = useState(false)

  useEffect(() => {
    let mindarThree
    let started = false

    const startAR = async () => {
      try {
        mindarThree = new MindARThree({
          container: containerRef.current,
          imageTargetSrc: '/targets.mind', // path to the .mind file
        })

        const { renderer, scene, camera } = mindarThree
        const anchor = mindarThree.addAnchor(0)

        // Video
        const video = document.createElement('video')
        video.src = 'https://sauhardh.github.io/ar-assets/ad.mp4' // video is hosted on this link
        video.crossOrigin = 'anonymous'
        video.loop = false
        video.muted = true
        video.playsInline = true

        const texture = new THREE.VideoTexture(video)
        // Video is expected of 9:16 (width, height) aspect ratio.
        const geometry = new THREE.PlaneGeometry(1, 16 / 9)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const plane = new THREE.Mesh(geometry, material)
        anchor.group.add(plane)

        await mindarThree.start()

        video.addEventListener('ended', () => {
          // Since, home button is only shown after a video ended for the first time.
          // and video has to be looped again.
          setShowHomeButton(true)
          video.loop = true
          video.play()
        })

        const playVideo = () => {
          video
            .play()
            .then(() => {
              setShowMessage(false)
              video.muted = false
            })
            .catch(() => {
              console.warn('looks like autoplay is blocked. Waiting for user interaction')
            })
        }

        // Play video when user touch the screen
        // though its already playing due to above code, if incase, it didn't start--touch the screen to play exist
        containerRef.current.addEventListener('touchstart', playVideo, { once: true })
        anchor.onTargetFound = () => {
          playVideo()
        }
        anchor.onTargetLost = () => {
          setShowMessage(true)
        }

        started = true
        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera)
        })
      } catch (err) {
        console.error('AR View failed to start', err)
      }
    }

    startAR()

    return () => {
      if (started && mindarThree) {
        mindarThree.stop()
        mindarThree.renderer.setAnimationLoop(null)
      }
    }
  }, [])
  return (
    <div
      ref={containerRef}
      className="ar-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        zIndex: 1000,
      }}
    >
      {showMessage && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <div className="px-6 py-4 rounded-2xl bg-black/50 backdrop-blur-lg text-white shadow-2xl border border-white/10">
            <p className="text-xs uppercase tracking-widest text-white/70">AR Ready</p>
            <p className="text-sm font-semibold mt-1">Point your camera at the target image</p>
          </div>
        </div>
      )}

      {showHomeButton && (
        <button
          onClick={() => {
            window.location.href = '/'
          }}
          className="absolute group bottom-4 left-1/2 -translate-x-1/2  px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#369fff] to-[#12dc9f] rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#12dc9f]/50 flex items-center gap-3 z-10"
        >
          Navigate to Home
          <ExternalLink className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
