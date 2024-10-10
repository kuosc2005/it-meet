import React from 'react';
import ITMeetLogo from '@/assets/images/itmeetlogo.png'; // Example for all sponsors

// Sponsor Component
const Sponsor = ({ name, tier, image }) => (
  <div className="sponsor-group flex flex-col items-center gap-2 md:gap-4">
    <h3 className="sponsor-tier text-lg sm:text-xl md:text-2xl font-bold text-[#12dc9f]">
      {tier} Sponsor
    </h3>
    <img 
      src={image}
      alt={`${tier} Sponsor - ${name}`}
      className="sponsor-logo object-contain w-[150px]"
      width={400}
      height={400}
    />
  </div>
);

// Main SponsorPage Component
export default function SponsorPage() {
  // Array to store sponsor data
  const sponsors = [
    { name: 'IT Meet', tier: 'Title', image: ITMeetLogo },
    { name: 'IT Meet', tier: 'Diamond', image: ITMeetLogo },
    // Add as many sponsors as needed here
  ];

  return (
    <div id='sponsors' className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      
      {/* Sponsor Header */}
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Sponsors
        </h1>
        <img
          src={ITMeetLogo}
          alt="itmeetlogodark"
          className="object-contain w-[150px]"
          width={500}
          height={500}
        />
        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      {/* Mapping through sponsor data */}
      {sponsors.map((sponsor, index) => (
        <Sponsor 
          key={index} 
          name={sponsor.name} 
          tier={sponsor.tier} 
          image={sponsor.image} 
        />
      ))}
    </div>
  );
}
