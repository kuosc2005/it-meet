import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [events] = useState([
    {
      id: 1,
      imgSrc: '/project.webp',
      title: 'Project Exhibition',
      isApplicationOpen: true,
      formLink: 'https://linktr.ee/projectexhibition',
      day: '26',
      category: 'main_event',
      description:
        'An opportunity for creators to display their completed projects, highlight technical achievements, and interact with viewers through hands-on demonstrations and detailed explanations.',
      details:
        'IT Meet “Project Exhibition” stands as a testament to the extraordinary technical prowess and innovative spirit of our participants. Here, they will have the opportunity to unveil and demonstrate their software and hardware projects before a panel of esteemed judges. Each project not only showcases their depth of knowledge and technical skill but also highlights their creativity and unwavering dedication to pushing the boundaries of technology. As the judges evaluate each entry based on its novelty, practicality, and technical complexity, the exhibition becomes a vibrant celebration of the remarkable innovation and ingenuity that defines our tech community. It serves not only as a platform for showcasing cutting-edge projects but also as an inspiring testament to the endless possibilities of technology-driven creativity and problem-solving.',
    },
    {
      id: 2,
      imgSrc: '/panel.webp',
      title: 'Panel Discussion',
      isApplicationOpen: false,
      formLink: '',
      day: '26',
      category: 'main_event',
      description:
        "The event features experts discussing key tech topics, with the 2024 focus on artificial intelligence and its implications for Nepal's industries.",
      details:
        "A “Panel Discussion” at IT Meet serves as a vital pre-event platform where distinguished experts from Nepal's top IT institutions and the tech industry gather to discuss pivotal topics in the IT sector. This structured forum promotes engaging conversations and debates on emerging technologies, industry trends, and relevant challenges. Panelists, recognized for their expertise, share valuable experiences and insights, providing attendees with a deeper understanding of current issues and future directions in technology. IT Meet 2024’s discussion focused on artificial intelligence (AI), covering topics such as technological disruptions, global AI adoption factors, ethics, and AI's current state in Nepal. Panelists, recognized for their expertise, provided valuable insights on implementing AI in local industries, offering attendees a deeper understanding of AI's impact and future directions.",
    },
    {
      id: 3,
      imgSrc: '/hackfest.webp',
      title: 'KU Hackfest',
      isApplicationOpen: true,
      formLink: 'https://dorahacks.io/hackathon/kuhackfest/detail',
      day: '24',
      category: 'main_event',
      description:
        '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems.',
      details:
        ' “KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems. By gathering programmers, developers, designers, and tech enthusiasts from around the globe, KU Hackfest creates a dynamic environment for knowledge sharing and collaboration. Participants will benefit from extensive networking opportunities, interactive workshops, and expert mentorship, bridging the gap between academia and industry. Building on past successes, KU Hackfest 2025 aspires to surpass previous iterations in scope and impact. Last year KU Hackfest 2024, held from September 29 to October 1, was Nepal’s largest in-person Major League Hacking (MLH) hackathon, attracting 501 applicants from diverse backgrounds and resulting in 51 finalized projects. With a cash prize pool exceeding Rs. 1,70,000, the event fostered teamwork and creativity, offering young coders a platform to showcase their skills, learn, and collaborate on innovative solutions.',
    },
    {
      id: 4,
      imgSrc: '/alumnimeet.webp',
      title: 'Alumni Meet',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/pcKX3CLpiiuLVjiPA',
      day: '25',
      category: 'pre_event',
      description:
        'An alumni meet is a special gathering where our alumni of KU come together to reconnect, celebrate, and strengthen their bond with their alma mater. It serves as a platform for alumni to meet old friends, share memories, and network professionally, while also allowing the institution to showcase its growth and achievements.',
      details:
        'The “Alumni Meet” is a gathering that unites graduates from the Department of Computer Science and Engineering, offering them a platform to reconnect, network, and share their experiences. This event fosters a strong sense of community among alumni, allowing them to reminisce about their university years, celebrate their achievements, and reflect on their professional journeys since graduation. In Alumni Meet 2024, approximately 27 alumni attended, spanning graduation years from 2000 onwards. The event featured nostalgic reunions where alumni reconnected with peers and professors, shared personal and professional accomplishments, and imparted valuable insights to current students, inspiring them to envision their own future paths. Their contributions added depth and significance to the event, creating a memorable and enriching experience for all participants.',
    },

    {
      id: 5,
      imgSrc: '/mock.webp',
      title: 'Mock Placement',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/X1XPqRXj6q5vAduK6',
      day: '26',
      category: 'main_event',
      description:
        'The event simulates corporate recruitment processes, including tests and interviews, offering participants valuable feedback from HR professionals to improve their job readiness.',
      details:
        'The “Mock Placement” event mirrors the actual recruitment procedures found in corporate settings, encompassing three pivotal rounds: an aptitude test, group discussion, and personal interview. This comprehensive simulation aims to gauge participants’ foundational skills, their adeptness in communication, and their overall suitability for professional roles. Beyond assessment, successful candidates benefit from invaluable feedback and tailored advice provided by seasoned HR professionals. This holistic approach not only enhances their readiness for real-world job interviews but also cultivates a deeper understanding of the expectations and dynamics within the corporate hiring landscape.',
    },
    {
      id: 6,
      imgSrc: '/career.webp',
      title: 'Career Fair',
      isApplicationOpen: false,
      formLink: '',
      day: '26',
      category: 'main_event',
      description:
        'The event connects students with potential employers through initial interviews and mock placement activities, facilitating valuable exchanges and insights into employment criteria, featuring 15 company stalls in 2024.',
      details:
        'The “Career Fair” serves as a bustling hub of interaction, bridging the gap between potential employers and prospective employees. An essential component of IT Meet, this event offers students a valuable opportunity to meet employers and engage in initial interviews, forging connections and opening doors to potential career paths. Companies gain insights into the pool of talent, while students glean invaluable knowledge about employers and the various criteria for employment, fostering a mutually beneficial exchange. In IT Meet 2024, 15 company stalls were featured, with representatives not only participating in the fair but also conducting mock placement activities, where they asked interview-related questions to interested individuals. This one-on-one engagement fostered meaningful connections and provided attendees with valuable insights across various industry sectors.',
    },
    {
      id: 7,
      imgSrc: '/blood.webp',
      title: 'Blood Donation',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/7m6ER61ejLmBCNsV7',
      day: '26',
      category: 'main_event',
      description:
        'The KU Youth Red Cross and IT Meet organizing committee collaborate on blood donation drives, encouraging attendees to contribute to saving lives and raising awareness about the critical need for regular blood donations in healthcare.',
      details:
        'In a testament to compassion and community service, the KU Youth Red Cross, in collaboration with the IT Meet organizing committee, organizes blood donation drives during the event. This initiative aims to contribute significantly to the noble cause of saving lives by encouraging attendees to donate blood. Through these efforts, participants and visitors alike are invited to embody the spirit of selflessness and humanitarianism, fostering a culture of caring and support within the community. The event not only underscores the importance of blood donation in healthcare but also serves as a platform to raise awareness about the critical need for regular donations to sustain blood supplies and meet medical emergencies effectively.',
    },
    {
      id: 8,
      imgSrc: '/quiz.webp',
      title: 'IT Quiz',
      isApplicationOpen: true,
      formLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScB2l8RZ0hQ_jSFuCAalebuwSW8o9qlgS2QvK_gEhZ12svkSQ/viewform?usp=sf_link',
      day: '26',
      category: 'main_event',
      description:
        'The event is an inter-school event that challenges teams of four with various IT-related questions across seven rounds, inspiring young minds while awarding prizes and a prestigious shield to the winners.',
      details:
        'The “IT Quiz Competition” is an inter-school event that tests participants’ knowledge of information technology. Teams of four engage in a series of thought-provoking questions, designed to evaluate their understanding of the dynamic field of IT. With a strong emphasis on inspiring and motivating young minds towards ICT, this competition awards impressive prizes and a prestigious running shield to the victorious teams, enhancing their passion and enthusiasm for technology. Last year, the IT Meet 2024 competition saw participation from seven teams. The quiz comprises seven rounds: General IT questions, Abbreviation Round, Gambling Round with three questions per team, Video Round, Audio Round, Rapid Fire Round and Buzzer Round. Each round is designed to make learning exciting and fun, turning it into a friendly yet challenging competition.',
    },
    {
      id: 9,
      imgSrc: '/gaming.webp',
      title: 'Gaming Events',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/RESZHtfayFLjWfNs5',
      day: '22',
      category: 'pre_event',
      description:
        'IT Meet 2025 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2024 with impressive participation across multiple titles.',
      details:
        'IT Meet 2025 will feature a grand Gaming (Esports) event, showcasing games like Valorant, Clash Royale, PUBG, and FIFA. The event is divided into two parts: the pre-event qualifiers, where players compete fiercely to earn a spot in the main-day competitions, and the semi-finals, which take place on the IT Meet day itself. The event will feature an attractive prize pool, making the competition even more exciting. It’s a chance to compete on a big stage, win great prizes, and become part of the thriving Esports community. Last year, IT Meet 2024 saw impressive participation with, Clash Royale (24 participants), PUBG (16 teams), Valorant (13 teams), and FIFA (22 participants).',
    },
    {
      id: 10,
      imgSrc: '/empoweher.webp',
      title: 'EmpowerHer',
      isApplicationOpen: true,
      formLink:
        'https://docs.google.com/forms/d/1Yi7CQKg-wuNAwRUYCRqgIgXo2CsQT_CHUOKmUm4K3_w/viewform?edit_requested=true&brid=aRSE_vjT8Xy1tlD7gF4SFg',
      day: '20',
      category: 'pre_event',
      details:
        'EmpowerHer is a dedicated initiative to encourage women in technology and academia by building confidence, enhancing technical skills, and fostering leadership. The program begins with virtual workshops on AI, cybersecurity, and research writing, along with a community wellness marathon to strengthen engagement. The main event offers a full day of hands-on technical sessions, confidence-building activities, networking, and inspirational talks from women leaders. With over 150 expected participants and wider online reach, EmpowerHer 2025 aims to create a safe, inclusive, and motivating environment that encourages women’s growth in STEM and drives long-term community impact.',
      description:
        '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. ',
    },
    {
      id: 11,
      imgSrc: '/idea_pitching.webp',
      title: 'Idea Pitching',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/DRYsCcT1ExHf25BS7',
      day: '22',
      category: 'pre_event',
      details:
        'The “Idea Pitching” competition at IT Meet emphasizes the convergence of creativity, innovation, and strategic foresight. It provides participants with a unique opportunity to showcase their ability to articulate compelling ideas. Each contestant is tasked with delivering a succinct pitch, addressing specific topics provided by the organizers. Judges, esteemed professionals in their fields, evaluate pitches based on criteria such as market feasibility, efficient resource allocation, and scalability potential. This event serves as a pivotal learning experience for engineering students, offering valuable insights into the intricacies of management and nurturing their entrepreneurial spirit. By participating, students expand their horizons, gain practical knowledge, and develop essential skills in pitching and business strategy, preparing them for future challenges in the professional world.',
      description:
        'A platform where participants showcase innovative concepts, present problem-solving approaches, and demonstrate creativity through concise and impactful pitches.',
    },
    {
      id: 12,
      imgSrc: '/weshieldlogo.webp',
      title: 'We Shield Cyber',
      isApplicationOpen: true,
      formLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSc9SpFmwz3QVm5oQtVF6xXfS-HiajySVEOOUT9sNZ4iJiLEMQ/viewform ',
      day: '21',
      category: 'pre_event',
      details:
        '"We Shield Cyber" is a premier cybersecurity conference at IT Meet 2025, organized by the Kathmandu University Networking and Cybersecurity Community in collaboration with Women in Cybersecurity Nepal. This event offers participants a unique opportunity to engage with leading cybersecurity experts through seminars, gain hands-on experience in a Capture The Flag (CTF) challenge, and explore career opportunities in a dedicated career fair. "We Shield Cyber" aims to raise awareness about the critical importance of cybersecurity, inspire future professionals, and nurture a community committed to protecting digital systems in an increasingly interconnected world.',
      description:
        '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. ',
      details:
        '“EmpowerHer” is an innovative initiative aimed at inspiring and empowering young girls by providing a platform to amplify their voices, engage in meaningful discussions, and connect with like-minded individuals in the tech industry. Featuring insightful talks, interactive workshops, and engaging tech-themed activities, EmpowerHER equips participants with the confidence and skills necessary to excel in the evolving tech landscape. This event is a pioneering effort to create an inclusive and empowering environment for girls in tech, boosting self-expression, learning, and engagement. The inaugural EmpowerHER ‘23 event was a significant success, drawing around 80 participants and highlighted speakers like Guna Kesari Pradhan, Roja Kiran Basukala, and Agma Malakar. The event fostered inspiration and dialogue, with notable moments including the “#iamremarkable” reflection session and discussions on women‘s roles in government technology, marking a significant step towards creating an inclusive and empowering environment for girls in tech.',
    },
    {
      id: 13,
      imgSrc: '/gaming.webp',
      title: 'Gaming Events',
      isApplicationOpen: true,
      formLink: 'http://linktr.ee/kuitmeet25',
      description:
        'IT Meet 2025 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2024 with impressive participation across multiple titles.',
      details:
        'IT Meet 2025 will feature a grand Gaming (Esports) event, showcasing games like Valorant, Clash Royale, PUBG, and FIFA. The event is divided into two parts: the pre-event qualifiers, where players compete fiercely to earn a spot in the main-day competitions, and the semi-finals, which take place on the IT Meet day itself. The event will feature an attractive prize pool, making the competition even more exciting. It’s a chance to compete on a big stage, win great prizes, and become part of the thriving Esports community. Last year, IT Meet 2024 saw impressive participation with, Clash Royale (24 participants), PUBG (16 teams), Valorant (13 teams), and FIFA (22 participants).',
    },
    {
      id: 14,
      imgSrc: '/hackfest.webp',
      title: 'KU HACKFEST',
      isApplicationOpen: true,
      formLink: 'https://dorahacks.io/hackathon/kuhackfest/detail',
      description:
        '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems.',
      details:
        '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 24-26 December 2025. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems. By gathering programmers, developers, designers, and tech enthusiasts from around the globe, KU Hackfest creates a dynamic environment for knowledge sharing and collaboration. Participants will benefit from extensive networking opportunities, interactive workshops, and expert mentorship, bridging the gap between academia and industry. Building on past successes, KU Hackfest 2025 aspires to surpass previous iterations in scope and impact. Last year KU Hackfest 2024, held from 15-16 November, was Nepal’s largest in-person Major League Hacking (MLH) hackathon, attracting 501 applicants from diverse backgrounds and resulting in 51 finalized projects. With a cash prize pool exceeding Rs. 1,70,000, the event fostered teamwork and creativity, offering young coders a platform to showcase their skills, learn, and collaborate on innovative solutions.',
    },

    {
      id: 15,
      imgSrc: '/mock.webp',
      title: 'Mock Placement',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/X1XPqRXj6q5vAduK6',
      description:
        'The event simulates corporate recruitment processes, including tests and interviews, offering participants valuable feedback from HR professionals to improve their job readiness.',
      details:
        'The “Mock Placement” event mirrors the actual recruitment procedures found in corporate settings, encompassing three pivotal rounds: an aptitude test, group discussion, and personal interview. This comprehensive simulation aims to gauge participants’ foundational skills, their adeptness in communication, and their overall suitability for professional roles. Beyond assessment, successful candidates benefit from invaluable feedback and tailored advice provided by seasoned HR professionals. This holistic approach not only enhances their readiness for real-world job interviews but also cultivates a deeper understanding of the expectations and dynamics within the corporate hiring landscape.',
    },
    {
      id: 16,
      imgSrc: '/AcousticNight.webp',
      title: 'Acoustic Night',
      day: '26',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/CBuJ5dvMYgz8f8bG8',
      category: 'post_event',
      description:
        '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies, fostering connections among attendees.s',
      details:
        'Acoustic Night” is a special celebration of music and serves as the closing event of IT MEET. This event features talented students performing a variety of songs, creating an enchanting evening of melodies. The performances will build connections between students and the guests of IT MEET. Acoustic Night offers a memorable conclusion to the journey, leaving participants with cherished memories. This event not only showcases the musical talents within the community but also marks the successful conclusion of IT Meet.',
    },
    {
      id: 17,
      imgSrc: '/treasurehunt.webp',
      title: 'AR Treasure Hunt',
      day: 'TBD',
      isApplicationOpen: true,
      formLink: 'https://arth24.tech/',
      category: 'post_event',
      description:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures.',
      details:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures. In its 2024 edition, the event attracted 218 attendees and combined technology with cultural exploration, culminating in a thrilling finale at Patan Durbar Square.',
    },
  ])

  return <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
}

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useEvents = () => useContext(EventContext)
