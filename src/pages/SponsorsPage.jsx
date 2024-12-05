import React from 'react';
import ITMeetLogo from '@/assets/images/itmeetlogo.webp';
import { storage, SPONSORS_BUCKET_ID } from "@/config/appwrite.js";
import { useEffect, useState } from 'react';

const Sponsor = ({ tier, images }) => {
  const imageDimensions = {
    'Title Sponsor': { base: 'w-24 md:w-36 lg:w-44' },
    'Diamond Sponsor': { base: 'w-20 md:w-32 lg:w-40' },
    'Gold': { base: 'w-16 md:w-28 lg:w-36' },
    'Silver Sponsor': { base: 'w-14 md:w-24 lg:w-32' },
    'Bronze Sponsor': { base: 'w-12 md:w-20 lg:w-28' },
    'Community Partners': { base: 'w-8 md:w-12 lg:w-16' },
    'Supported Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Banking Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Beverage Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Career Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Food Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Gift Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Internet Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'SMS Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'E-Commerce Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Confectionery Partner': { base: 'w-8 md:w-12 lg:w-16' },
    'Media Partner': { base: 'w-8 md:w-12 lg:w-16' },

  }[tier] || { base: 'w-14 md:w-24 lg:w-32' };

  const textSize = {
    'Title Sponsor': 'text-2xl md:text-4xl lg:text-5xl',
    'Diamond Sponsor': 'text-xl md:text-3xl lg:text-4xl',
    'Gold': 'text-lg md:text-2xl lg:text-3xl',
    'Silver Sponsor': 'text-md md:text-xl lg:text-2xl',
    'Bronze Sponsor': 'text-sm md:text-lg lg:text-xl',
    'Community Partners': 'text-xs md:text-sm lg:text-md',
    'Supported Partners': 'text-xs md:text-sm lg:text-md',
    'Banking Partner': 'text-xs md:text-sm lg:text-md',
    'Beverage Partner': 'text-xs md:text-sm lg:text-md',
    'Career Partner': 'text-xs md:text-sm lg:text-md',
    'Food Partner': 'text-xs md:text-sm lg:text-md',
    'Gift Partner': 'text-xs md:text-sm lg:text-md',
    'Internet Partner': 'text-xs md:text-sm lg:text-md',
    'SMS Partner': 'text-xs md:text-sm lg:text-md',
    'E-Commerce Partner': 'text-xs md:text-sm lg:text-md',
    'Confectionery Partner': 'text-xs md:text-sm lg:text-md',
    'Media Partner': 'text-xs md:text-sm lg:text-md',
  }[tier] || 'text-md md:text-xl lg:text-2xl';


  return (
    <div className="sponsor-group flex flex-col items-center gap-2 md:gap-8">
      <h3 className={`sponsor-tier text-[#12dc9f] ${textSize} font-bold text-[#12dc9f]`}
        style={{
          backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        {tier}
      </h3>

      <div className="flex flex-row gap-4 md:gap-6">


        {images.map((img, index) => (
          < img
            key={index}
            src={img}
            alt={`${tier} - Logo ${index + 1}`
            }
            className={`sponsor-logo object-contain ${imageDimensions.base}`}
          />
        )
        )}

      </div>
    </div >
  );
};


export default function SponsorPage() {

  const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

  const sponsors = [
    { name: 'Title', tier: 'Title Sponsor', images: [] },
    { name: 'Diamond', tier: 'Diamond Sponsor', images: [] },
    { name: 'Gold', tier: 'Gold Sponsor', images: [] },
    { name: 'Silver', tier: 'Silver Sponsor', images: [] },
    { name: 'Bronze', tier: 'Bronze Sponsor', images: [] },
    { name: 'Community', tier: 'Community Partners', images: [] },
    { name: 'Supported', tier: 'Supported Partners', images: [] },
    { name: 'Banking', tier: 'Banking Partner', images: [] },
    { name: 'Beverage', tier: 'Beverage Partner', images: [] },
    { name: 'Career', tier: 'Career Partner', images: [] },
    { name: 'Food', tier: 'Food Partner', images: [] },
    { name: 'Gift', tier: 'Gift Partner', images: [] },
    { name: 'Internet', tier: 'Internet Partner', images: [] },
    { name: 'SMS', tier: 'SMS Partner', images: [] },
    { name: 'E-Commerce', tier: 'E-Commerce Partner', images: [] },
    { name: 'Confectionery', tier: 'Confectionery Partner', images: [] },
    { name: 'Media', tier: 'Media Partner', images: [] },
  ];

  const [newSponsors, setSponsors] = useState(sponsors);
  useEffect(() => {
    const fetchImage = async () => {
      const response = await storage.listFiles("sponsors");
      const files = response?.files || [];

      const updatedSponsors = sponsors.map(sponsor => {
        const categoryImages = files.filter(file => file.name.split('.')[0] == sponsor.name)
          .map(img => `https://cloud.appwrite.io/v1/storage/buckets/${SPONSORS_BUCKET_ID}/files/${img.$id}/view?project=${PROJECT_ID}&project=${PROJECT_ID}&mode=admin`);

        return {
          ...sponsor,
          images: categoryImages.length > 0 ? categoryImages : [ITMeetLogo]
        }
      });
      setSponsors(updatedSponsors)
    };
    fetchImage();
  }, [])


  return (
    <div id='sponsors' className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">


      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]"
          style={{ backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)' }}>
          Our Sponsors

        </h1>
        {/* <img
          src={ITMeetLogo}
          alt="itmeetlogodark"
          className="object-contain w-[150px]"
          width={500}
          height={500}
        /> */}
        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      {newSponsors.map((sponsor, index) => (
        <Sponsor
          key={index}
          name={sponsor.name}
          tier={sponsor.tier}
          images={sponsor.images}
        />
      ))}

    </div>
  );
}