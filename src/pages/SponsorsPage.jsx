import React from 'react'
import ITMeetLogo from '@/assets/images/itmeetlogo.svg'
import { storage, SPONSORS_BUCKET_ID, SPONSORS_BUCKET_ID_2 } from '@/config/appwrite.js'
import { useEffect, useState } from 'react'

const Sponsor = ({ tier, images }) => {
  const imageDimensions = {
    //  Major Sponsors (descending)
    'Title Sponsor': { base: 'w-36 sm:w-44 md:w-56 lg:w-64' },
    'Diamond Sponsor': { base: 'w-32 sm:w-40 md:w-52 lg:w-60' },
    'Gold Sponsor': { base: 'w-28 sm:w-36 md:w-48 lg:w-56' },
    'Silver Sponsor': { base: 'w-24 sm:w-32 md:w-40 lg:w-48' },
    'Bronze Sponsor': { base: 'w-20 sm:w-28 md:w-36 lg:w-44' },

    //  Other Titled Partners (medium & consistent)
    'Media Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Sustainable Tech Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Digital Learning Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Study Abroad Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Refreshment Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Fintech Knowledge Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },

    //  Community Partners (smaller than titled)
    'Community Partners': { base: 'w-16 sm:w-20 md:w-24 lg:w-28' },

    //  Supporting / Utility Partners (same as other titled)
    'Supported Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Banking Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Beverage Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Celebration Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Career Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Food Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Gift Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Wellness Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Event Sponsor': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Internet Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'SMS Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'E-Commerce Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
    'Confectionery Partner': { base: 'w-22 sm:w-26 md:w-30 lg:w-36' },
  }[tier] || { base: 'w-22 sm:w-26 md:w-30 lg:w-36' }

  const textSize =
    {
      'Title Sponsor': 'text-2xl md:text-4xl lg:text-5xl',
      Gold: 'text-xl md:text-3xl lg:text-4xl',
      'Silver Sponsor': 'text-md md:text-xl lg:text-2xl',
      'Bronze Sponsor': 'text-sm md:text-lg lg:text-xl',
      'Supported Partners': 'text-xs md:text-sm lg:text-md',
      'Banking Partner': 'text-xs md:text-sm lg:text-md',
      'Beverage Partner': 'text-xs md:text-sm lg:text-md',
      'Celebration Partner': 'text-xs md:text-sm lg:text-md',
      'Career Partner': 'text-xs md:text-sm lg:text-md',
      'Food Partner': 'text-xs md:text-sm lg:text-md',
      'Gift Partner': 'text-xs md:text-sm lg:text-md',
      'Wellness Partner': 'text-xs md:text-sm lg:text-md',
      'Event Sponsor': 'text-xs md:text-sm lg:text-md',
      'Internet Partner': 'text-xs md:text-sm lg:text-md',
      'SMS Partner': 'text-xs md:text-sm lg:text-md',
      'E-Commerce Partner': 'text-xs md:text-sm lg:text-md',
      'Confectionery Partner': 'text-xs md:text-sm lg:text-md',
      'Media Partner': 'text-xs md:text-sm lg:text-md',
      'Sustainable Tech Partner': 'text-xs md:text-sm lg:text-md',
      'Digital Learning Partner': 'text-xs md:text-sm lg:text-md',
      'Study Abroad Partner': 'text-xs md:text-sm lg:text-md',
      'Refreshment Partner': 'text-xs md:text-sm lg:text-md',
      'Fintech Knowledge Partner': 'text-xs md:text-sm lg:text-md',
      // 'Community Partners': 'text-xs md:text-sm lg:text-lg',
      'Community Partners': 'text-xs md:text-sm lg:text-md',
    }[tier] || 'text-md md:text-xl lg:text-2xl'

  return (
    <div className="sponsor-group flex flex-col items-center gap-2 md:gap-8">
      <h3
        className={`sponsor-tier text-[#12dc9f] ${textSize} font-bold text-[#12dc9f]`}
        style={{
          backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {tier}
      </h3>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${tier} - Logo ${index + 1}`}
            className={`sponsor-logo object-contain ${imageDimensions.base}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function SponsorPage() {
  const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID

  const sponsors = [
    // { name: 'Title', tier: 'Title Sponsor', images: [] },
    { name: 'Gold', tier: 'Gold Sponsor', images: [] },
    // { name: 'Silver', tier: 'Silver Sponsor', images: [] },
    { name: 'Bronze', tier: 'Bronze Sponsor', images: [] },
    // { name: 'Supported', tier: 'Supported Partners', images: [] },
    // { name: 'Banking', tier: 'Banking Partner', images: [] },
    // { name: 'Beverage', tier: 'Beverage Partner', images: [] },
    // { name: 'Celebration', tier: 'Celebration Partner', images: [] },
    // { name: 'Career', tier: 'Career Partner', images: [] },
    // { name: 'Food', tier: 'Food Partner', images: [] },
    // { name: 'Event', tier: 'Event Sponsor', images: [] },
    // { name: 'Gift', tier: 'Gift Partner', images: [] },
    // { name: 'Wellness', tier: 'Wellness Partner', images: [] },
    // { name: 'Internet', tier: 'Internet Partner', images: [] },
    // { name: 'SMS', tier: 'SMS Partner', images: [] },
    // { name: 'E-Commerce', tier: 'E-Commerce Partner', images: [] },
    // { name: 'Confectionery', tier: 'Confectionery Partner', images: [] },
    // { name: 'Media', tier: 'Media Partner', images: [] },
    { name: 'SustainableTech', tier: 'Sustainable Tech Partner', images: [] },
    { name: 'DigitalLearning', tier: 'Digital Learning Partner', images: [] },
    // { name: 'StudyAbroad', tier: 'Study Abroad Partner', images: [] },
    // { name: 'Refreshment', tier: 'Refreshment Partner', images: [] },
    { name: 'FinTechKnowledge', tier: 'Fintech Knowledge Partner', images: [] },

    { name: 'Community', tier: 'Community Partners', images: [] },
  ]

  const [newSponsors, setSponsors] = useState(sponsors)
  useEffect(() => {
    const fetchImage = async () => {
      const response = await storage.listFiles('sponsors')
      const response1 = await storage.listFiles('Sponsor1')

      const file1 = response?.files || []
      const file2 = response1?.files || []
      const files = file1.concat(file2)

      const updatedSponsors = sponsors.map((sponsor) => {
        const categoryImages = files
          .filter((file) => file.name.split('.')[0] == sponsor.name)
          .map((img) => {
            return `https://cloud.appwrite.io/v1/storage/buckets/${img.bucketId == SPONSORS_BUCKET_ID ? SPONSORS_BUCKET_ID : SPONSORS_BUCKET_ID_2}/files/${img.$id}/view?project=${PROJECT_ID}&project=${PROJECT_ID}&mode=admin`
          })

        return {
          ...sponsor,
          images: categoryImages.length > 0 ? categoryImages : [ITMeetLogo],
        }
      })
      setSponsors(updatedSponsors)
    }
    fetchImage()
  }, [])

  return (
    <div
      id="sponsors"
      className="flex flex-col overflow-hidden p-10 py-28 min-h-[50vh] lg:px-20 gap-8 items-center justify-center  bg-[#171A23]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Our Sponsors
        </h1>
        <div className="w-full mb-2 md:mb-5 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      {newSponsors.map((sponsor, index) => (
        <Sponsor key={index} name={sponsor.name} tier={sponsor.tier} images={sponsor.images} />
      ))}
    </div>
  )
}
