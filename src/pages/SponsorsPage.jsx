import React from 'react';
import ITMeetLogo from '@/assets/images/itmeetlogo.png';


const Sponsor = ({ name, tier, image }) => (
  <div className="sponsor-group flex flex-col items-center gap-2 md:gap-4">
    <h3 className="sponsor-tier text-lg sm:text-xl md:text-2xl font-bold text-[#12dc9f]"
       style={{
        backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
          
    {tier} Sponsor
    </h3>


    {
  tier === 'Gold' ? (
   
    <div className="flex flex-row gap-2 ">
      <img src={image} alt={`${tier} Sponsor - Logo 1`}
       className="sponsor-logo object-contain w-[324px] h-[57px]" />
      <img src={image} alt={`${tier} Sponsor - Logo 2`} 
      className="sponsor-logo object-contain w-[324px] h-[57px]" />
    </div>
  ) : tier === 'Silver' ? (
    
    <div className="flex flex-row gap-2 ">
      <img src={image} alt={`${tier} Sponsor - Logo 1`} 
      className="sponsor-logo object-contain w-[324px] h-[57px]" />
      <img src={image} alt={`${tier} Sponsor - Logo 2`} 
      className="sponsor-logo object-contain w-[324px] h-[57px]" />
      <img src={image} alt={`${tier} Sponsor - Logo 3`} 
      className="sponsor-logo object-contain w-[324px] h-[57px]" />
    </div>
  ) : (
  
    <img src={image} alt={`${tier} Sponsor - Logo 1`}
     className="sponsor-logo object-contain w-[324px] h-[57px]" />
  )
}



export default function SponsorPage() {
  
  const sponsors = [
    { name: 'IT Meet', tier: 'Title', image: ITMeetLogo },
    { name: 'IT Meet', tier: 'Diamond', image: ITMeetLogo },
    {name:'IT Meet', tier:'Gold' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Silver' , image: ITMeetLogo,},
    {name:'IT Meet', tier:'Bronze' , image: ITMeetLogo,}
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
