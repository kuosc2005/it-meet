import React, {useState, useRef} from 'react';
import team from '@/assets/team/teamMembers'; // Adjust the import path as needed
import shadowImage from '@/assets/images/bgimg.webp'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoInstagram } from "react-icons/io";

const Team = () => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const membersSectionRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleTeamClick = (index) => {
    setSelectedTeamIndex(index);
      membersSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='bg-[#171A23] pb-6'>  
        <h1 className="text-center text-[38px] p-6 sm:text-[40px] sm:p-7  md:text-[42px] md:p-8 lg:text-[46px] lg:p-9 xl:text-[50px] align-middle bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#369fff] to-[#14C58F]">
          Meet The Team
        </h1>
 
        <div className="text-white pl-8 pr-8 sm:pl-11 sm:pr-11 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24">
        {/* For mobile screen */}
        <div className="sm:hidden">
          <button
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-700 text-gray-300 font-semibold rounded hover:bg-gradient-to-r hover:from-[#369FFF] hover:to-[#14C58F] hover:text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {team[selectedTeamIndex]?.title || team[0]?.title}
            {/* Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="bg-gray-800 rounded shadow-lg">
              {team.map((team, index) => (
                <button key={index} className={`w-full text-left px-4 py-2 text-[12px] font-semibold transition-all duration-300 ease-in-out ${ index === selectedTeamIndex
                      ? "bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-[#369FFF] hover:to-[#14C58F] hover:text-white"
                  }`}
                  onClick={() => {
                    handleTeamClick(index);
                    setIsDropdownOpen(false); // Close dropdown after selection
                  }}
                >
                  {team.title}
                </button>
              ))}
            </div>
            )}
          </div>


      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mb-8">
        {team.map((team, index) => (
          <button
            key={index}
            className={`px-1 py-2 text-[12px] lg:text-[16px] xl:text-[19px] font-semibold rounded transition-all duration-1000 ease-in-out ${
              index === selectedTeamIndex
                ? "bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-[#369FFF] hover:to-[#14C58F] hover:text-white"
            }`}
            onClick={() => handleTeamClick(index)}
          >
            {team.title}
          </button>
        ))}
      </div>

            <div >
              <h1 className={`text-left text-[26px] mt-4 sm:text-[27px] sm:mt-0 md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]`}>
                {team[selectedTeamIndex].title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 md:gap-8 lg:gap-9 mt-2">
                {team[selectedTeamIndex].members.map((member, memberIndex) => (
                  <div key={memberIndex} className="relative gradient-border pt-6">
                    <div className="flex items-left justify mb-1">
                      <svg className="w-[15px] h-[24px] md:w-[20px]" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M10 0L20 5.7735V17.3205L10 23.094L0 17.3205L0 5.7735L10 0Z" fill="#05E2BD" />
                        <path d="M7.03927 9.75626C6.86227 8.93736 7.75872 8.30966 8.46769 8.75607L13.6313 12.0073C14.3193 12.4405 14.1763 13.4824 13.397 13.7142L11.5787 14.2551C11.3809 14.3139 11.2077 14.4358 11.0857 14.6022L10.0123 16.0655C9.53007 16.723 8.49748 16.5029 8.32522 15.7059L7.03927 9.75626Z" fill="#171A23" />
                      </svg>
                      
                      <span className="ml-2 text-[12px] sm:text-[13px] md:text-[14px] pt-[3px]">
                        {member.department}
                      </span>
                    </div>

                    <h2 className="text-[24px] sm:text-[25px] md:text-[26px] lg:text-[27px] xl:text-[28px] font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
                      {member.name.toUpperCase()}
                    </h2>

                    <div className="h-52 flex sm:h-56 md:h-60 lg:h-64 overflow-hidden">
                      <div className="group relative ml-16 lg:ml-32 xl:ml-28">
                        <img
                          src={shadowImage}
                          className="absolute w-[350px] blur-md transform group-hover:translate-x-3 group-hover:translate-y-10 transition-all ease-in-out duration-500 sm:translate-y-20 md:translate-y-3"
                        />
                        <img
                          src={member.image}
                          className="h-[280px] sm:h-[300px] md:h-[320px] xl:h-[300px] w-auto filter grayscale group-hover:filter-none transform object-contain transition duration-500"
                          alt={member.name}
                        />
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
