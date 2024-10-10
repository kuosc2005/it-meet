// import React from 'react'
// import image from '../assets/pics/arekh.png'
import shadowImage from '../assets/images/bgreen.webp'
// import teammembers from '@/assets/pics/teamMembers'
// const Team = () => {
//   return (
//     <div className='bg-[#171A23]'>
//     <h1 className="text-center text-6xl pt-10 font-bold align-middle  bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">Meet The Team</h1>
//       <div className=" text-white p-5 sm:p-5 md:p-11 lg:p-24">
//         <div className=" mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

//             <div className="item group relative" style={{ borderBottom: '2px solid', borderImageSource: 'linear-gradient(90deg, #369FFF 0%, #3BD0A3 64.4%, #14C58F 91.9%)', borderImageSlice: 1}}>
//               <div className="flex items-left justify mb-4">
//                 <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M10 0L20 5.7735V17.3205L10 23.094L0 17.3205L0 5.7735L10 0Z" fill="#05E2BD" />
//                   <path d="M7.03927 9.75626C6.86227 8.93736 7.75872 8.30966 8.46769 8.75607L13.6313 12.0073C14.3193 12.4405 14.1763 13.4824 13.397 13.7142L11.5787 14.2551C11.3809 14.3139 11.2077 14.4358 11.0857 14.6022L10.0123 16.0655C9.53007 16.723 8.49748 16.5029 8.32522 15.7059L7.03927 9.75626Z" fill="#171A23"/>
//                 </svg>
//                 <span className="ml-2 mt-0.5 text-sm">TECHNICAL TEAM</span>
//               </div>
              
//               <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">AREKH SHRESTHA</h2>
//               <div className='h-64 overflow-hidden flex justify-center'>
//                 <img src={shadowImage} className="absolute h-[400px] w-auto transform top-5 opacity-60 " />
//                 <img src={image} className="h-[400px] w-auto transform filter grayscale group-hover:filter-none object-cover transition duration-300" />
//               </div>
//             </div>


//           </div>
//         </div>
//     </div>
//   </div>
//   )
// }


// export default Team

import React from 'react';
import teamMembers from '@/assets/pics/teamMembers'; // Adjust the import path as needed

const Team = () => {
  return (
    <div className='bg-[#171A23]'>
      <h1 className="text-center text-6xl pt-10 font-bold align-middle bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
        Meet The Team
      </h1>
      <div className="text-white p-5 sm:p-5 md:p-11 lg:p-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="item group relative"
                style={{
                  borderBottom: '2px solid',
                  borderImageSource: 'linear-gradient(90deg, #369FFF 0%, #3BD0A3 64.4%, #14C58F 91.9%)',
                  borderImageSlice: 1
                }}>
                <div className="flex items-left justify mb-4">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L20 5.7735V17.3205L10 23.094L0 17.3205L0 5.7735L10 0Z" fill="#05E2BD" />
                    <path d="M7.03927 9.75626C6.86227 8.93736 7.75872 8.30966 8.46769 8.75607L13.6313 12.0073C14.3193 12.4405 14.1763 13.4824 13.397 13.7142L11.5787 14.2551C11.3809 14.3139 11.2077 14.4358 11.0857 14.6022L10.0123 16.0655C9.53007 16.723 8.49748 16.5029 8.32522 15.7059L7.03927 9.75626Z" fill="#171A23"/>
                  </svg>
                  <span className="ml-2 text-lg">{member.department}</span>
                </div>

                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
                  {member.name.toUpperCase()}
                </h2>

                <div className='h-64 overflow-hidden flex justify-center'>
                <img src={shadowImage} className="absolute h-[400px] w-auto transform top-5 opacity-60 " />
                 
                  <img
                    src={member.image}
                    className="h-[400px] w-auto transform filter grayscale group-hover:filter-none object-cover transition duration-300"
                    alt={member.name}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
