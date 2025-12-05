/*
 * This module uses MindARThree for playing a video on particular image (Image Tracking).
 */

import { useRef, useEffect } from 'react'
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js'
import * as THREE from 'three'
import { useState } from 'react'

export default function ARView() {
  const containerRef = useRef(null)
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    let mindarThree
    let started = false

    const startAR = async () => {
      try {
        mindarThree = new MindARThree({
          container: containerRef.current,
          imageTargetSrc: '', // path to the .mind file
        })

        const { renderer, scene, camera } = mindarThree
        const anchor = mindarThree.addAnchor(0)

        // Video
        const video = document.createElement('video')
        video.src = 'https://sauhardh.github.io/ar-assets/ad.mp4' // video is hosted on this link
        video.crossOrigin = 'anonymous'
        video.loop = true
        video.muted = true
        video.playsInline = true

        const texture = new THREE.VideoTexture(video)
        // Video is expected of 9:16(width, height) aspect ratio.
        const geometry = new THREE.PlaneGeometry(1, 16 / 9)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const plane = new THREE.Mesh(geometry, material)
        anchor.group.add(plane)

        await mindarThree.start()

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
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg z-10">
          Point camera at the target image
        </div>
      )}
    </div>
  )
}
