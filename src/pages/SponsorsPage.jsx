import React from 'react';
import ITMeetLogo from '@/assets/images/itmeetlogo.png';
const Sponsor = ({ tier, image }) => {
 
  const imageDimensions = 
    tier === 'Title Sponsor' ? { width: '220px' } :
    tier === 'Diamond Sponsor' ? { width: '190px' } :
    tier === 'Gold' ? { width: '170px' } :
    tier === 'Silver Sponsor' ? { width: '140px' } :
    tier === 'Bronze Sponsor' ? { width: '120px' } :
    tier === 'Community Partners' ? { width: '70px' } :
    tier === 'Supported By' ? { width: '70px' } : 
    { width: '140px' }; 

  return (
    <div className="sponsor-group flex flex-col items-center gap-2 md:gap-8">
      <h3 className="sponsor-tier text-lg sm:text-xl md:text-3xl font-bold text-[#12dc9f]"
        style={{
          backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        {tier}
      </h3>

      {tier === 'Gold' ? (
        <div className="flex items-center gap-6">
          <div>
            <img src={image} alt={`${tier} - Logo 1`} 
                 className="sponsor-logo object-contain" 
                 style={imageDimensions} />
          </div>
          <div>
            <img src={image} alt={`${tier} - Logo 2`} 
                 className="sponsor-logo object-contain" 
                 style={imageDimensions} />
          </div>
        </div>
        
      ) : tier === 'Bronze Sponsor' || tier === 'Community Partners' || tier === 'Supported By' ? (
        <div className="flex flex-row gap-6">
          <img src={image} alt={`${tier} - Logo 1`} 
               className="sponsor-logo object-contain" 
               style={imageDimensions} />
          <img src={image} alt={`${tier} - Logo 2`} 
               className="sponsor-logo object-contain" 
               style={imageDimensions} />
          <img src={image} alt={`${tier} - Logo 3`} 
               className="sponsor-logo object-contain" 
               style={imageDimensions} />
        </div>
        
      ) : (
        <img src={image} alt={`${tier} - Logo 1`} 
             className="sponsor-logo object-contain" 
             style={imageDimensions} />
      )}
    </div>
  );
};



export default function SponsorPage() {
  
  const sponsors = [
    { name: 'IT Meet', tier: 'Title Sponsor', image: ITMeetLogo },
    { name: 'IT Meet', tier: 'Diamond Sponsor', image: ITMeetLogo },
    {name:'IT Meet', tier:'Gold Sponsor' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Silver Sponsor' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Bronze Sponsor' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Community Partners' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Supported By' , image: ITMeetLogo,}
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
          image={sponsor.image} 
        />
      ))}
    </div>
  );
}
