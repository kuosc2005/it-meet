import React from 'react';
import ITMeetLogo from '@/assets/images/itmeetlogo.webp';
const Sponsor = ({ tier, images }) => {
 
  const imageDimensions = {
    'Title Sponsor': { base: 'w-24 md:w-36 lg:w-44' },
    'Diamond Sponsor': { base: 'w-20 md:w-32 lg:w-40' },
    'Gold': { base: 'w-16 md:w-28 lg:w-36' },
    'Silver Sponsor': { base: 'w-14 md:w-24 lg:w-32' },
    'Bronze Sponsor': { base: 'w-12 md:w-20 lg:w-28' },
    'Community Partners': { base: 'w-8 md:w-12 lg:w-16' },
    'Supported By': { base: 'w-8 md:w-12 lg:w-16' },
  }[tier] || { base: 'w-14 md:w-24 lg:w-32' };

  const textSize = {
    'Title Sponsor': 'text-2xl md:text-4xl lg:text-5xl',
    'Diamond Sponsor': 'text-xl md:text-3xl lg:text-4xl',
    'Gold': 'text-lg md:text-2xl lg:text-3xl',
    'Silver Sponsor': 'text-md md:text-xl lg:text-2xl',
    'Bronze Sponsor': 'text-sm md:text-lg lg:text-xl',
    'Community Partners': 'text-xs md:text-sm lg:text-md',
    'Supported By': 'text-xs md:text-sm lg:text-md',
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
          <img
            key={index}
            src={img}
            alt={`${tier} - Logo ${index + 1}`}
            className={`sponsor-logo object-contain ${imageDimensions.base}`}
          />
        ))}
      </div>

     
    </div>
  );
};



export default function SponsorPage() {
  
  const sponsors = [
    { name: 'IT Meet', tier: 'Title Sponsor', images: [ITMeetLogo] },
    { name: 'IT Meet', tier: 'Diamond Sponsor', images: [ITMeetLogo] },
    {name:'IT Meet', tier:'Gold Sponsor' , images: [ITMeetLogo],},
    {name:'IT Meet', tier:'Silver Sponsor' , images: [ITMeetLogo],},
    {name:'IT Meet', tier:'Bronze Sponsor' , images: [ITMeetLogo],},
    {name:'IT Meet', tier:'Community Partners' , images: [ITMeetLogo],},
    {name:'IT Meet', tier:'Supported By' , images: [ITMeetLogo],}
  ];

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

      {sponsors.map((sponsor, index) => (
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