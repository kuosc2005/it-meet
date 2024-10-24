import React, { useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { prosp_images_single, prosp_images_double } from '@/assets/prosp_images/prospectus_images'

const Prospectus = () => {
  const [flipbookSize, setFlipbookSize] = useState({ width: 310, height: 450 })
  const [isSinglePage, setIsSinglePage] = useState(false)

  const handleResize = () => {
    const screenWidth = window.innerWidth

    if (screenWidth >= 1280) {
      setFlipbookSize({ width: 450, height: 650 })
      setIsSinglePage(false)
    } else if (screenWidth >= 1024) {
      setFlipbookSize({ width: 400, height: 600 })
      setIsSinglePage(false)
    } else if (screenWidth >= 784) {
      setFlipbookSize({ width: 350, height: 500 })
      setIsSinglePage(false)

      //single pages for screen below 784
    } else if (screenWidth >= 628) {
      setFlipbookSize({ width: 450, height: 650 })
      setIsSinglePage(true)
    } else if (screenWidth >= 528) {
      setFlipbookSize({ width: 400, height: 580 })
      setIsSinglePage(true)
    } else if (screenWidth >= 428) {
      setFlipbookSize({ width: 380, height: 550 })
      setIsSinglePage(true)
    } else {
      setFlipbookSize({ width: 310, height: 450 })
      setIsSinglePage(true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex flex-col items-center overflow-hidden p-5 gap-8 min-h-full bg-[#171A23]">
      <div>
        {isSinglePage ? (
          <>
            <HTMLFlipBook
              width={flipbookSize.width}
              height={flipbookSize.height}
              size="fixed"
              flippingTime={1500}
              showCover={false}
              usePortrait={isSinglePage} // Toggle between single and double page based on screen size
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              className="w-full"
            >
              {prosp_images_single.map((page, index) => (
                <div key={page.id} className="page">
                  <img src={page.img} alt={`page-${index + 1}`} />
                </div>
              ))}
            </HTMLFlipBook>
          </>
        ) : (
          <>
            <HTMLFlipBook
              width={flipbookSize.width}
              height={flipbookSize.height}
              size="fixed"
              flippingTime={1500}
              showCover={false}
              usePortrait={isSinglePage} // Toggle between single and double page based on screen size
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              className="w-full"
            >
              {prosp_images_double.map((page, index) => (
                <div key={page.id} className="page">
                  <img src={page.img} alt={`page-${index + 1}`} />
                </div>
              ))}
            </HTMLFlipBook>
          </>
        )}
      </div>
    </div>
  )
}

export default Prospectus
