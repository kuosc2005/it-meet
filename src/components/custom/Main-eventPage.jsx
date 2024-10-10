import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import ITMeetLogo from '@/assets/images/itmeetlogo.webp'
export default function MainEventPage() {

  const eventsData = [
    {
      id: 1,
      title: "KU HACKFEST",
      description: "ALorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    },

    {
      id: 2,
      title: "EMPOWER HER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      
    },

    {
      id: 3,
      title: "EMPOWER HER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      
    },

    {
      id: 3,
      title: "EMPOWER HER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      
    },  
    
  ];
  return (
    <div className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          MAIN-EVENTS
        </h1>
        
        {/*<div className="w-full rounded-full bg-[#14C58F] h-1.5 md:h-2 lg:h-2.5"></div>*/}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">

  {eventsData.map((event) => (
    <div 
    className=" bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-3xl shadow-[0_0_6px_2px_rgba(20,197,143,0.5)] h-25vh"
  >
    <Card 
      key={event.id} 
      className="bg-[#1A1E28] text-white rounded-3xl h-full">
      
      <CardHeader className="flex items-start justify-start">
      <img
        src={ITMeetLogo}
        alt="IT Meet logo"
        style={{
          width: 'auto', 
          height: 'clamp(2rem, 2vw, 3rem)'
        }}
      />
      </CardHeader>
      
      <CardContent>
      <div className="relative flex items-center justify-center w-full mt-[-1rem] p-2">
                  <div 
                    className="flex items-center justify-center overflow-hidden bg-white rounded-full" 
                    style={{
                      width: 'clamp(6rem, 15vw, 23rem)', 
                      height: 'clamp(6rem, 15vw, 23rem)'
                    }}
                  >
                    <img
                      src={event.imgSrc}
                      alt="Event Image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

      </CardContent>
      
      <CardFooter className="flex flex-col items-center mt-[-1rem] sm:mt-[-1rem] md:mt-[-1rem]">
  <CardTitle className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-[1.2] tracking-[0.04em] text-center bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">{event.title}</CardTitle>
  <CardDescription className="text-xs sm:text-sm md:text-base">{event.description}</CardDescription>
</CardFooter>
    </Card>
    </div>
  ))}
</div>
 

      </div>
    </div>
  )
}
