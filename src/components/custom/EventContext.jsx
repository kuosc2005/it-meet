import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const EventContext = createContext()

function createEvent(event) {
  const today = new Date().getDate()

  const eventDay = Number(event.day)

  const hasFormLink = Boolean(event.formLink && event.formLink.trim() !== '')

  if (isNaN(eventDay)) {
    return {
      ...event,
      isApplicationOpen: false,
      isClosingSoon: false,
      isRunning: false,
      isCompleted: false,
    }
  }

  return {
    ...event,
    isApplicationOpen: today < eventDay && hasFormLink,
    isClosingSoon: today >= eventDay - 2 && today < eventDay && hasFormLink,
    isRunning: today === eventDay,
    isCompleted: today > eventDay,
  }
}
const rawEvents = [
  {
    id: 1,
    imgSrc: '/project.webp',
    title: 'Project Exhibition',
    formLink: '',
    day: '26',
    category: 'main_event',
    description:
      'An opportunity for creators to display their completed projects, highlight technical achievements, and interact with viewers through hands-on demonstrations and detailed explanations.',
    details:
      'IT Meet “Project Exhibition” stands as a testament to the extraordinary technical prowess and innovative spirit of our participants. Here, they will have the opportunity to unveil and demonstrate their software and hardware projects before a panel of esteemed judges. Each project not only showcases their depth of knowledge and technical skill but also highlights their creativity and unwavering dedication to pushing the boundaries of technology.',
  },
  {
    id: 2,
    imgSrc: '/panel.webp',
    title: 'Panel Discussion',
    formLink: '',
    day: '26',
    category: 'main_event',
    description:
      "The event features experts discussing key tech topics, with the 2024 focus on artificial intelligence and its implications for Nepal's industries.",
    details:
      "A “Panel Discussion” at IT Meet serves as a vital pre-event platform where distinguished experts from Nepal's top IT institutions and the tech industry gather to discuss pivotal topics in the IT sector. This structured forum promotes engaging conversations and debates on emerging technologies, industry trends, and relevant challenges.",
  },
  {
    id: 3,
    imgSrc: '/hackfest.webp',
    title: 'KU Hackfest',
    formLink: 'https://hackfest.kucc.ku.edu.np/',
    day: '24',
    category: 'main_event',
    description:
      '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025.',
    details:
      ' “KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems.',
  },
  {
    id: 4,
    imgSrc: '/alumnimeet.webp',
    title: 'Alumni Meet',
    formLink: '',
    day: '25',
    category: 'pre_event',
    description:
      'An alumni meet is a special gathering where our alumni of KU come together to reconnect, celebrate, and strengthen their bond with their alma mater.',
    details:
      'The “Alumni Meet” is a gathering that unites graduates from the Department of Computer Science and Engineering, offering them a platform to reconnect, network, and share their experiences.',
  },
  {
    id: 5,
    imgSrc: '/mock.webp',
    title: 'Mock Placement',
    formLink: '',
    day: '26',
    category: 'main_event',
    description:
      'The event simulates corporate recruitment processes, including tests and interviews, offering participants valuable feedback from HR professionals to improve their job readiness.',
    details:
      'The “Mock Placement” event mirrors the actual recruitment procedures found in corporate settings, encompassing three pivotal rounds: an aptitude test, group discussion, and personal interview.',
  },
  {
    id: 6,
    imgSrc: '/career.webp',
    title: 'Career Fair',
    formLink: '',
    day: '26',
    category: 'main_event',
    description:
      'The event connects students with potential employers through initial interviews and mock placement activities, facilitating valuable exchanges and insights into employment criteria.',
    details:
      'The “Career Fair” serves as a bustling hub of interaction, bridging the gap between potential employers and prospective employees. An essential component of IT Meet, this event offers students a valuable opportunity to meet employers and engage in initial interviews.',
  },
  {
    id: 7,
    imgSrc: '/blood.webp',
    title: 'Blood Donation',
    formLink: '',
    day: '26',
    category: 'main_event',
    description:
      'The KU Youth Red Cross and IT Meet organizing committee collaborate on blood donation drives, encouraging attendees to contribute to saving lives.',
    details:
      'In a testament to compassion and community service, the KU Youth Red Cross, in collaboration with the IT Meet organizing committee, organizes blood donation drives during the event.',
  },
  {
    id: 8,
    imgSrc: '/quiz.webp',
    title: 'IT Quiz',
    formLink:
      '',
    day: '26',
    category: 'main_event',
    description:
      'The event is an inter-school event that challenges teams of four with various IT-related questions across seven rounds, inspiring young minds while awarding prizes.',
    details:
      'The “IT Quiz Competition” is an inter-school event that tests participants’ knowledge of information technology. Teams of four engage in a series of thought-provoking questions.',
  },
  {
    id: 9,
    imgSrc: '/gaming.webp',
    title: 'Gaming Events',
    formLink: 'https://linktr.ee/Itmeetgaming2025',
    day: '22',
    category: 'pre_event',
    description:
      'IT Meet 2025 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2024.',
    details:
      'IT Meet 2025 will feature a grand Gaming (Esports) event, showcasing games like Valorant, Clash Royale, PUBG, and FIFA. The event is divided into two parts: the pre-event qualifiers and the semi-finals.',
  },
  {
    id: 10,
    imgSrc: '/empoweher.webp',
    title: 'EmpowerHer',
    formLink:
      'https://docs.google.com/forms/d/1Yi7CQKg-wuNAwRUYCRqgIgXo2CsQT_CHUOKmUm4K3_w/viewform?edit_requested=true&brid=aRSE_vjT8Xy1tlD7gF4SFg',
    day: '20',
    category: 'pre_event',
    description:
      '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. ',
    details:
      'EmpowerHer is a dedicated initiative to encourage women in technology and academia by building confidence, enhancing technical skills, and fostering leadership.',
  },
  {
    id: 11,
    imgSrc: '/idea_pitching.webp',
    title: 'Idea Pitching',
    formLink: 'https://qrfy.io/b5Kwu_BrLg',
    day: '22',
    category: 'pre_event',
    description:
      'A platform where participants showcase innovative concepts, present problem-solving approaches, and demonstrate creativity through concise and impactful pitches.',
    details:
      'The “Idea Pitching” competition at IT Meet emphasizes the convergence of creativity, innovation, and strategic foresight. It provides participants with a unique opportunity to showcase their ability to articulate compelling ideas.',
  },
  {
    id: 12,
    imgSrc: '/weshieldlogo.webp',
    title: 'We Shield Cyber',
    formLink: '',
    day: '21',
    category: 'pre_event',
    description:
      'A cybersecurity-focused event that encourages participants to explore digital defense, analyze vulnerabilities, and build awareness on safeguarding systems.',
    details:
      '"We Shield Cyber" is a premier cybersecurity conference at IT Meet 2025, organized by the Kathmandu University Networking and Cybersecurity Community in collaboration with Women in Cybersecurity Nepal.',
  },
  {
    id: 13,
    imgSrc: '/AcousticNight.webp',
    title: 'Acoustic Night',
    day: '26',
    formLink: '',
    category: 'post_event',
    description:
      '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies.',
    details:
      'Acoustic Night” is a special celebration of music and serves as the closing event of IT MEET. This event features talented students performing a variety of songs, creating an enchanting evening of melodies.',
  },
  {
    id: 14,
    imgSrc: '/treasurehunt.webp',
    title: 'AR Treasure Hunt',
    day: 'TBD',
    formLink: '',
    category: 'post_event',
    description:
      'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures.',
    details:
      'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures.',
  },
]

export const EventProvider = ({ children }) => {
  const [events] = useState(rawEvents.map(createEvent))

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  )
}

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useEvents = () => useContext(EventContext)