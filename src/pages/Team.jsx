import React from 'react';
import teamMembers from '@/assets/team/teamMembers'; // Adjust the import path as needed
import shadowImage from '@/assets/images/bgimg.png'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoInstagram } from "react-icons/io";

const Team = () => {
  return (
    <div className='bg-[#171A23]'>
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl xl:text-8xl pt-10 pb-5 lg:pb-0 font-bold align-middle bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
        Meet The Team
      </h1>
      
      <div className="text-white p-5 sm:p-5 md:p-11 lg:p-20:pt-0 ">
        <h1 className="text-left text-3xl sm:text-4xl md:text-5xl xl:text-6xl pb-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
          Technical Team
        </h1>

        <div className="p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="item group relative pt-5 border-b-2 border-b-[linear-gradient(90deg,_#369FFF_0%,_#3BD0A3_64.4%,_#14C58F_91.9%)]">

                <div className="flex items-left justify mb-4">
                  <svg className="w-[15px] h-[24px] md:w-[20px]" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0L20 5.7735V17.3205L10 23.094L0 17.3205L0 5.7735L10 0Z" fill="#05E2BD" />
                    <path d="M7.03927 9.75626C6.86227 8.93736 7.75872 8.30966 8.46769 8.75607L13.6313 12.0073C14.3193 12.4405 14.1763 13.4824 13.397 13.7142L11.5787 14.2551C11.3809 14.3139 11.2077 14.4358 11.0857 14.6022L10.0123 16.0655C9.53007 16.723 8.49748 16.5029 8.32522 15.7059L7.03927 9.75626Z" fill="#171A23"/>
                  </svg>
                  <span className="ml-2 text-sm pt-[3px] md:text-lg lg:text-base">{member.department}</span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
                  {member.name.toUpperCase()}
                </h2>

                <div className="h-56 flex sm:h-60 lg:h-64 overflow-hidden">
                  <div className="flex flex-col items-center justify-center ml-2 mr-20 lg:mr-32 xl:mr-28">
                      <GrLinkedinOption className="text-white bg-[#0077b5] rounded-sm mb-2 cursor-pointer" size={25} onClick={() => window.open(member.linkedin, '_blank')}/>
                      <IoLogoInstagram className="bg-white bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md mb-2 cursor-pointer" size={25} onClick={() => window.open(`https://instagram.com/${member.insta}`, '_blank')}/>
                      <FaGithub className="cursor-pointer" color="white" size={25} onClick={() => window.open(`https://github.com/${member.github}`, '_blank')}/>
                  </div>
                  <div className='relative'>
                    <img src={shadowImage} className="absolute w-[300px] blur-lg"/>
                    <img src={member.image} className="h-[250px] sm:h-[300px] lg:h-[350px] w-auto transform filter grayscale group-hover:filter-none object-contain transition duration-300" alt={member.name}/>
                  </div>
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
