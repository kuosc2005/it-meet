import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [mainEvents] = useState([
    {
      id: 1,
      imgSrc: '/project.webp',
      title: 'Project Exhibition',
      description:
        "The event showcases participants' innovative software and hardware projects, celebrating their technical skills and creativity before esteemed judges.",
      formLink: '',
    },
    {
      id: 2,
      imgSrc: '/panel.webp',
      title: 'Panel Discussion',
      description:
        "The event features experts discussing key tech topics, with the 2023 focus on artificial intelligence and its implications for Nepal's industries.",
      formLink: '',
    },
    {
      id: 3,
      imgSrc: '/gaming.webp',
      title: 'Gaming Events',
      description:
        'IT Meet 2024 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2023 with impressive participation across multiple titles.',
      formLink: '',
    },
    {
      id: 4,
      imgSrc: '/googling.webp',
      title: 'Googling Competition',
      description:
        "The event tests teams' problem-solving and research skills using Google, rewarding the fastest and most adept participants with attractive prizes.",
      formLink: '',
    },
    {
      id: 5,
      imgSrc: '/typing.webp',
      title: 'Typing Competition',
      description:
        'The event allows participants to showcase their speed and accuracy in a friendly environment, with around 66 attendees demonstrating their skills during the 2023 event.',
      formLink: '',
    },
    {
      id: 6,
      imgSrc: '/coding.webp',
      title: 'Coding Challenge',
      description:
        "The event showcases participants' coding skills across various difficulty levels, fostering a collaborative community, with 28 participants demonstrating their talent in 2023.",
      formLink: '',
    },
    {
      id: 7,
      imgSrc: '/mock.webp',
      title: 'Mock Placement',
      description:
        'The event simulates corporate recruitment processes, including tests and interviews, offering participants valuable feedback from HR professionals to improve their job readiness.',
      formLink: '',
    },
    {
      id: 8,
      imgSrc: '/line.webp',
      title: 'Line Following Robot',
      description:
        'The event challenges participants to program robots to navigate a course using line-following sensors, with 48 individuals in 12 teams showcasing their skills over two days at IT Meet 2023.',
      formLink: '',
    },
    {
      id: 9,
      imgSrc: '/career.webp',
      title: 'Career Fair',
      description:
        'The event connects students with potential employers through initial interviews and mock placement activities, facilitating valuable exchanges and insights into employment criteria, featuring 15 company stalls in 2023.',
      formLink: '',
    },
    {
      id: 10,
      imgSrc: '/blood.webp',
      title: 'Blood Donation',
      description:
        'The KU Youth Red Cross and IT Meet organizing committee collaborate on blood donation drives, encouraging attendees to contribute to saving lives and raising awareness about the critical need for regular blood donations in healthcare.',
      formLink: '',
    },
    {
      id: 11,
      imgSrc: '/photo.webp',
      title: 'Photography Competition',
      description:
        "The event invites participants to showcase their artistic talents, allowing visitors to vote for their favorite among 53 submissions, with a prize awarded to the photographer best capturing technology's impact on life.",
      formLink: '',
    },
    {
      id: 12,
      imgSrc: '/quiz.webp',
      title: 'IT Quiz',
      description:
        'The event is an inter-school event that challenges teams of four with various IT-related questions across seven rounds, inspiring young minds while awarding prizes and a prestigious shield to the winners.',
      formLink: '',
    },
  ])

  const [preEvents] = useState([
    { id: 1, imgSrc: 'https://picsum.photos/200/300', title: 'KU HACKFEST' },
    { id: 2, imgSrc: 'https://picsum.photos/200/300', title: 'TEDx' },
    { id: 3, imgSrc: 'https://picsum.photos/200/300', title: 'Mobile Rush' },
    { id: 4, imgSrc: 'https://picsum.photos/200/300', title: 'Code Camp' },
    { id: 5, imgSrc: 'https://picsum.photos/200/300', title: 'All Nepal IT Cup' },
    { id: 6, imgSrc: 'https://picsum.photos/200/300', title: 'Geo Special' },
    { id: 7, imgSrc: 'https://picsum.photos/200/300', title: 'AI Competition' },
    { id: 8, imgSrc: 'https://picsum.photos/200/300', title: 'EmpowerHer' },
    { id: 9, imgSrc: 'https://picsum.photos/200/300', title: 'Alumni Meet' },
    { id: 10, imgSrc: 'https://picsum.photos/200/300', title: 'Idea Pitching' },
    { id: 11, imgSrc: 'https://picsum.photos/200/300', title: 'AR Treasure Hunt' },
    { id: 12, imgSrc: 'https://picsum.photos/200/300', title: 'KUBing' },
    { id: 13, imgSrc: 'https://picsum.photos/200/300', title: 'We Shield Cyber' },
  ])

  const [listEvents] = useState([
    {
      id: 1,
      imgSrc: '/hackfest.webp',
      title: 'KU HACKFEST',
      description:
        '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 15-17 November 2024. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems.',
      details:
        ' “KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 15-17 November 2024. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems. By gathering programmers, developers, designers, and tech enthusiasts from around the globe, KU Hackfest creates a dynamic environment for knowledge sharing and collaboration. Participants will benefit from extensive networking opportunities, interactive workshops, and expert mentorship, bridging the gap between academia and industry. Building on past successes, KU Hackfest 2024 aspires to surpass previous iterations in scope and impact. Last year KU Hackfest 2023, held from September 29 to October 1, was Nepal’s largest in-person Major League Hacking (MLH) hackathon, attracting 501 applicants from diverse backgrounds and resulting in 51 finalized projects. With a cash prize pool exceeding Rs. 1,70,000, the event fostered teamwork and creativity, offering young coders a platform to showcase their skills, learn, and collaborate on innovative solutions.',
    },
    {
      id: 2,
      imgSrc: '/empoweher.webp',
      title: 'EMPOWER HER',
      description:
        '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. ',
      details:
        '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. The inaugural event in 2023 attracted around 80 participants and featured prominent speakers, promoting self-expression and inclusivity in the tech industry.',
    },
    {
      id: 3,
      coc: '/coc_codecamp.pdf',
      imgSrc: '/CodeCamp.webp',
      title: 'CODE CAMP',
      description:
        '“Code Camp” is also one of the main events of IT Meet that ignites creativity and brilliance among participants who collaborate in teams of three, engaging in a coding marathon on their selected development platforms.',
      details:
        '“Code Camp” is also one of the main events of IT Meet that ignites creativity and brilliance among participants who collaborate in teams of three, engaging in a coding marathon on their selected development platforms. Throughout the event, teams delve into crafting innovative solutions, showcasing their technical prowess and problem-solving abilities. Expert judges assess projects based on criteria such as market viability, relevance, and innovation level, spotlighting potential industry disruptors and pioneering ideas. Last year, in IT Meet 2023, CodeCamp drew 45 participants who demonstrated exceptional ingenuity and coding skills, illustrating their dedication to advancing technology and innovation at IT MEET.',
    },
    {
      id: 4,
      imgSrc: '/treasurehunt.webp',
      title: 'AR TREASURE HUNT',
      description:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures.',
      details:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures. In its 2023 edition, the event attracted 218 attendees and combined technology with cultural exploration, culminating in a thrilling finale at Patan Durbar Square.',
    },
    {
      id: 5,
      imgSrc: '/AcousticNight.webp',
      title: 'Acoustic Night',
      description:
        '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies, fostering connections among attendees.s',
      details:
        '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies, fostering connections among attendees. This celebration not only showcases the community\'s musical talents but also offers a memorable conclusion to the IT Meet journey, leaving participants with cherished memories of creativity and camaraderie.',
    },
  ])

  return (
    <EventContext.Provider value={{ mainEvents, preEvents, listEvents }}>
      {children}
    </EventContext.Provider>
  )
}

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useEvents = () => useContext(EventContext)
