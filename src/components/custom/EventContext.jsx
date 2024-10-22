import React, { createContext, useContext, useState } from 'react';
const EventContext = createContext();


export const EventProvider = ({ children }) => {
  const [mainEvents] = useState([
    {
      id: 1,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Project Exhibition',
      description: 'The event showcases participants\' innovative software and hardware projects, celebrating their technical skills and creativity before esteemed judges.',
      formLink: '',
    },
    {
      id: 2,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Panel Discussion',
      description: 'The event features experts discussing key tech topics, with the 2023 focus on artificial intelligence and its implications for Nepal\'s industries.',
      formLink: '',
    },
    {
      id: 3,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Gaming Events',
      description: 'IT Meet 2024 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2023 with impressive participation across multiple titles.',
      formLink: '',
    },
    {
      id: 4,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Googling Competition',
      description: 'The event tests teams\' problem-solving and research skills using Google, rewarding the fastest and most adept participants with attractive prizes.',
      formLink: '',
    },
    {
      id: 5,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Typing Competition',
      description: 'The event allows participants to showcase their speed and accuracy in a friendly environment, with around 66 attendees demonstrating their skills during the 2023 event.',
      formLink: '',
    },
    {
      id: 6,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Coding Challenge',
      description: 'The event showcases participants\' coding skills across various difficulty levels, fostering a collaborative community, with 28 participants demonstrating their talent in 2023.',
      formLink: '',
    },
    {
      id: 7,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Mock Placement',
      description: 'The event simulates corporate recruitment processes, including tests and interviews, offering participants valuable feedback from HR professionals to improve their job readiness.',
      formLink: '',
    },
    {
      id: 8,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Line Following Robot',
      description: 'The event challenges participants to program robots to navigate a course using line-following sensors, with 48 individuals in 12 teams showcasing their skills over two days at IT Meet 2023.',
      formLink: '',
    },
    {
      id: 9,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Career Fair',
      description: 'The event connects students with potential employers through initial interviews and mock placement activities, facilitating valuable exchanges and insights into employment criteria, featuring 15 company stalls in 2023.',
      formLink: '',
    },
    {
      id: 10,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Blood Donation',
      description: 'The KU Youth Red Cross and IT Meet organizing committee collaborate on blood donation drives, encouraging attendees to contribute to saving lives and raising awareness about the critical need for regular blood donations in healthcare.',
      formLink: '',
    },
    {
      id: 11,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'Photography Competition',
      description: 'The event invites participants to showcase their artistic talents, allowing visitors to vote for their favorite among 53 submissions, with a prize awarded to the photographer best capturing technology\'s impact on life.',
      formLink: '',
    },
    {
      id: 12,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'IT Quiz',
      description: 'The event is an inter-school event that challenges teams of four with various IT-related questions across seven rounds, inspiring young minds while awarding prizes and a prestigious shield to the winners.',
      formLink: '',
    },
    
  ]);

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
  ]);

  const [listEvents] = useState([
    { id: 1, imgSrc: '/hackfest.jpg', title: 'KU HACKFEST', description: 'The "KU Hackfest" is a 48-hour international-level hackathon from November 15-17, 2024, aimed at fostering creativity and innovation among tech enthusiasts, building on last year\'s success with over 500 participants and a cash prize pool exceeding Rs. 1,70,000.' },
    { id: 2, imgSrc: '/empowerher.jpg', title: 'EMPOWER HER', description: '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. The inaugural event in 2023 attracted around 80 participants and featured prominent speakers, promoting self-expression and inclusivity in the tech industry.' },
    { id: 3, imgSrc: '', title: 'CODE CAMP', description: '"Code Camp" is a key event at IT Meet where participants team up to engage in a coding marathon, developing innovative solutions on their chosen platforms. In 2023, the event attracted 45 participants, showcasing their technical skills and creativity, with projects judged on market viability and innovation potential.' },
    { id: 4, imgSrc: '', title: 'AR TREASURE HUNT', description: 'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures. In its 2023 edition, the event attracted 218 attendees and combined technology with cultural exploration, culminating in a thrilling finale at Patan Durbar Square.' },
    { id: 5, imgSrc: '', title: 'Acoustic Night', description: '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies, fostering connections among attendees. This celebration not only showcases the community\'s musical talents but also offers a memorable conclusion to the IT Meet journey, leaving participants with cherished memories of creativity and camaraderie.' },
  ]);

  return (
    <EventContext.Provider value={{ mainEvents, preEvents, listEvents }}>
      {children}
    </EventContext.Provider>
  );
};


export const useEvents = () => useContext(EventContext);
