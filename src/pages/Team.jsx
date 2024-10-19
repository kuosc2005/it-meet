import React from 'react';
import team from '@/assets/team/teamMembers'; // Adjust the import path as needed
import shadowImage from '@/assets/images/bgimg.png'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoInstagram } from "react-icons/io";

const Team = () => {
  return (
    <div className='bg-[#171A23]'>  
        <h1 className="text-center text-[38px] p-6 sm:text-[40px] sm:p-7  md:text-[42px] md:p-8 lg:text-[46px] lg:p-9 xl:text-[50px] align-middle bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#369fff] to-[#14C58F]">
          Meet The Team
        </h1>
        
        <div className="text-white pl-8 pr-8 sm:pl-11 sm:pr-11 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 ">
          {team.map((team, index) => (
            <div key={index} >
              <h1 className={`text-left text-[26px] sm:text-[27px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F] ${index > 0 ? 'pt-12' : ''}`}>
                {team.title}
              </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7 md:gap-8 lg:gap-9">
                {team.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="relative gradient-border pt-6">
                      <div className="flex items-left justify mb-1">
                        <svg className="w-[15px] h-[24px] md:w-[20px]" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L20 5.7735V17.3205L10 23.094L0 17.3205L0 5.7735L10 0Z" fill="#05E2BD" />
                          <path d="M7.03927 9.75626C6.86227 8.93736 7.75872 8.30966 8.46769 8.75607L13.6313 12.0073C14.3193 12.4405 14.1763 13.4824 13.397 13.7142L11.5787 14.2551C11.3809 14.3139 11.2077 14.4358 11.0857 14.6022L10.0123 16.0655C9.53007 16.723 8.49748 16.5029 8.32522 15.7059L7.03927 9.75626Z" fill="#171A23"/>
                        </svg>
                        <span className="ml-2 text-[12px] sm:text-[13px] md:text-[14px]  pt-[3px]">{member.department}</span>
                      </div>

                      <h2 className="text-[24px] sm:text-[25px] md:text-[26px] lg:text-[27px] xl:text-[28px] font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F]">
                        {member.name.toUpperCase()}
                      </h2>

                      <div className="h-52 flex sm:h-56 md:h-60 lg:h-64 overflow-hidden">
                        <div className="flex flex-col items-center justify-center ml-2 mr-16 lg:mr-32 xl:mr-28">
                            {member.linkedIn && (<GrLinkedinOption className="text-white bg-[#0077b5] rounded-sm mb-2 cursor-pointer w-6 h-6 xl:w-7 xl:h-7" onClick={() => window.open(member.linkedIn, '_blank')}/>)}
                            {member.insta && (<IoLogoInstagram className="bg-white bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md mb-2 cursor-pointer w-6 h-6 xl:w-7 xl:h-7" onClick={() => window.open(`https://instagram.com/${member.insta}`, '_blank')}/>)}
                            {member.github && (<FaGithub className="cursor-pointer w-6 h-6 xl:w-7 xl:h-7" color="white" onClick={() => window.open(`https://github.com/${member.github}`, '_blank')}/>)}
                        </div>
                        <div className='group relative'>
                          <img src={shadowImage} className="absolute w-[350px] blur-md sm:pt-10 md:pt-0"/>
                          <img src={member.image} className="h-[280px] sm:h-[300px] md:h-[320px] xl:h-[300px] w-auto transform filter grayscale group-hover:filter-none object-contain transition duration-300" alt={member.name}/>
                        </div>
                      </div>
                    </div>
                ))}
                </div>
              </div>
            ))}
          </div>
 
    </div>
  );
};

export default Team;
