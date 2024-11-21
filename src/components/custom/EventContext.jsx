
import PropTypes from 'prop-types'
import { TrainFrontTunnel } from 'lucide-react'
const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [mainEvents] = useState([
    {
      id: 1,
      imgSrc: '/project.webp',
      title: 'Project Exhibition',
      isApplicationOpen: false,
      formLink: '',
      description:
        "The event showcases participants' innovative software and hardware projects, celebrating their technical skills and creativity before esteemed judges.",
      details:
        'IT Meet’s “Project Exhibition” stands as a testament to the extraordinary technical prowess and innovative spirit of our participants. Here, they will have the opportunity to unveil and demonstrate their software and hardware projects before a panel of esteemed judges. Each project not only showcases their depth of knowledge and technical skill but also highlights their creativity and unwavering dedication to pushing the boundaries of technology. As the judges evaluate each entry based on its novelty, practicality, and technical complexity, the exhibition becomes a vibrant celebration of the remarkable innovation and ingenuity that defines our tech community. It serves not only as a platform for showcasing cutting-edge projects but also as an inspiring testament to the endless possibilities of technology-driven creativity and problem-solving.',
    },
    {
      id: 2,
      imgSrc: '/panel.webp',
      title: 'Panel Discussion',
      isApplicationOpen: false,
      formLink: '',
      description:
        "The event features experts discussing key tech topics, with the 2023 focus on artificial intelligence and its implications for Nepal's industries.",
      details:
        "A “Panel Discussion” at IT Meet serves as a vital pre-event platform where distinguished experts from Nepal's top IT institutions and the tech industry gather to discuss pivotal topics in the IT sector. This structured forum promotes engaging conversations and debates on emerging technologies, industry trends, and relevant challenges. Panelists, recognized for their expertise, share valuable experiences and insights, providing attendees with a deeper understanding of current issues and future directions in technology. IT Meet 2023’s discussion focused on artificial intelligence (AI), covering topics such as technological disruptions, global AI adoption factors, ethics, and AI's current state in Nepal. Panelists, recognized for their expertise, provided valuable insights on implementing AI in local industries, offering attendees a deeper understanding of AI's impact and future directions.",
    },
    {
      id: 3,
      imgSrc: '/gaming.webp',
      title: 'Gaming Events',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/RESZHtfayFLjWfNs5',
      description:
        'IT Meet 2024 will host a grand Gaming (Esports) event featuring popular games and a competitive prize pool, following a successful 2023 with impressive participation across multiple titles.',
      details:
        'IT Meet 2024 will feature a grand Gaming (Esports) event, showcasing games like Valorant, Clash Royale, DOTA 2, PUBG, and FIFA. The event is divided into two parts: the pre-event qualifiers, where players compete fiercely to earn a spot in the main-day competitions, and the semi-finals, which take place on the IT Meet day itself. The event will feature an attractive prize pool, making the competition even more exciting. It’s a chance to compete on a big stage, win great prizes, and become part of the thriving Esports community. Last year, IT Meet 2023 saw impressive participation with Dota 2 (8 teams), Clash Royale (24 participants), PUBG (16 teams), Valorant (13 teams), and FIFA (22 participants).',
    },
    {
      id: 4,
      imgSrc: '/googling.webp',
      title: 'Googling Competition',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/7ztrNTaYtRr9Bpeq7',
      description:
        "The event tests teams' problem-solving and research skills using Google, rewarding the fastest and most adept participants with attractive prizes.",
      details:
        "Googling Competition is one of the main day events of IT Meet where participants' wit and resourcefulness are put to the test. In this event, teams of four are given specific problems to solve using only the Google search engine. This competition is designed to enhance participants' research skills and their ability to efficiently navigate the vast digital landscape. Success is rewarded with attractive gift hampers, celebrating the most adept and swift researchers. The competition aims to challenge critical thinking and refine problem-solving skills. In last year’s IT Meet 2023, the event saw 43 participants and utilized a Node.js and MySQL database script developed by our seniors, showcasing the integration of technical expertise and collaborative effort.",
    },
    {
      id: 5,
      imgSrc: '/typing.webp',
      title: 'Typing Competition',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/S9F13eE6haZGDhev8',
      description:
        'The event allows participants to showcase their speed and accuracy in a friendly environment, with around 66 attendees demonstrating their skills during the 2023 event.',
      details:
        'The “Typing Competition” in IT Meet offers a platform for enthusiasts to showcase their skills and compete in a friendly environment. Participants, ranging from various backgrounds and skill levels, engage in both online and physical competitions over three days. IT Meet 2023’s event, with approximately 66 attendees, saw impressive demonstrations of speed and accuracy, highlighting the dedication and talent of participants. This event serves as an opportunity to celebrate and refine typing skills.',
    },
    {
      id: 6,
      imgSrc: '/coding.webp',
      title: 'Coding Challenge',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/ssFuq9RvKnfGDTw59',
      description:
        "The event showcases participants' coding skills across various difficulty levels, fostering a collaborative community, with 28 participants demonstrating their talent in 2023.",
      details:
        'The Coding Challenge is a dynamic competition that immerses participants in the world of coding and problem-solving, showcasing their technical prowess and innovation. With challenges spanning Easy, Medium, and Hard levels, participants navigate through complex coding problems individually, pushing the boundaries of their skills and fostering healthy competition. Beyond a mere contest, this event cultivates a community where coding enthusiasts converge to exchange ideas and elevate their abilities. In IT Meet 2023, 28 participants took part, demonstrating exceptional coding skills and contributing to a vibrant atmosphere of skill development and companionship at the IT Meet.',
    },
    {
      id: 7,
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
      id: 8,
      imgSrc: '/line.webp',
      title: 'Line Following Robot',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/ikhFRq9mPyQSWCCQ6',
      description:
        'The event challenges participants to program robots to navigate a course using line-following sensors, with 48 individuals in 12 teams showcasing their skills over two days at IT Meet 2023.',
      details:
        'In the “Line Following Robot” event, participants will demonstrate their robots’ accuracy and speed as they maneuver through a specified course using advanced line-following methods. These robots, equipped with specialized sensors, will skillfully track a marked path on the floor. Success hinges on precisely programming the robots to process real-time sensor data, enabling them to make smart decisions and navigate the course efficiently in the shortest possible time. In IT Meet 2023, this event spanned two days and saw the participation of around 48 individuals organized into 12 teams, showcasing their technical expertise and competitive spirit.',
    },
    {
      id: 9,
      imgSrc: '/career.webp',
      title: 'Career Fair',
      isApplicationOpen: false,
      formLink: '',
      description:
        'The event connects students with potential employers through initial interviews and mock placement activities, facilitating valuable exchanges and insights into employment criteria, featuring 15 company stalls in 2023.',
      details:
        'The “Career Fair” serves as a bustling hub of interaction, bridging the gap between potential employers and prospective employees. An essential component of IT Meet, this event offers students a valuable opportunity to meet employers and engage in initial interviews, forging connections and opening doors to potential career paths. Companies gain insights into the pool of talent, while students glean invaluable knowledge about employers and the various criteria for employment, fostering a mutually beneficial exchange. In IT Meet 2023, 15 company stalls were featured, with representatives not only participating in the fair but also conducting mock placement activities, where they asked interview-related questions to interested individuals. This one-on-one engagement fostered meaningful connections and provided attendees with valuable insights across various industry sectors.',
    },
    {
      id: 10,
      imgSrc: '/blood.webp',
      title: 'Blood Donation',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/7m6ER61ejLmBCNsV7',
      description:
        'The KU Youth Red Cross and IT Meet organizing committee collaborate on blood donation drives, encouraging attendees to contribute to saving lives and raising awareness about the critical need for regular blood donations in healthcare.',
      details:
        'In a testament to compassion and community service, the KU Youth Red Cross, in collaboration with the IT Meet organizing committee, organizes blood donation drives during the event. This initiative aims to contribute significantly to the noble cause of saving lives by encouraging attendees to donate blood. Through these efforts, participants and visitors alike are invited to embody the spirit of selflessness and humanitarianism, fostering a culture of caring and support within the community. The event not only underscores the importance of blood donation in healthcare but also serves as a platform to raise awareness about the critical need for regular donations to sustain blood supplies and meet medical emergencies effectively.',
    },
    {
      id: 11,
      imgSrc: '/photo.webp',
      title: 'Photography Competition',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/Lcc66VFZPohqiy7M8',
      description:
        "The event invites participants to showcase their artistic talents, allowing visitors to vote for their favorite among 53 submissions, with a prize awarded to the photographer best capturing technology's impact on life.",
      details:
        "The “Photography Competition” invites participants to showcase their artistic talents by submitting their best photographs for exhibition at the venue. Visitors to the event have the opportunity to vote for their favorite photograph, recognizing the most compelling portrayal of this theme. Last year, in IT Meet 2023, the contest drew participation from 53 photographers, each contributing unique perspectives and interpretations through their images. The winning photographer was awarded a prize, acknowledging their skill in capturing the essence of technology's impact on our lives through the art of photography.",
    },
    {
      id: 12,
      imgSrc: '/quiz.webp',
      title: 'IT Quiz',
      isApplicationOpen: true,
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScB2l8RZ0hQ_jSFuCAalebuwSW8o9qlgS2QvK_gEhZ12svkSQ/viewform?usp=sf_link',
      description:
        'The event is an inter-school event that challenges teams of four with various IT-related questions across seven rounds, inspiring young minds while awarding prizes and a prestigious shield to the winners.',
      details:
        'The “IT Quiz Competition” is an inter-school event that tests participants’ knowledge of information technology. Teams of four engage in a series of thought-provoking questions, designed to evaluate their understanding of the dynamic field of IT. With a strong emphasis on inspiring and motivating young minds towards ICT, this competition awards impressive prizes and a prestigious running shield to the victorious teams, enhancing their passion and enthusiasm for technology. Last year, the IT Meet 2023 competition saw participation from seven teams. The quiz comprises seven rounds: General IT questions, Abbreviation Round, Gambling Round with three questions per team, Video Round, Audio Round, Rapid Fire Round and Buzzer Round. Each round is designed to make learning exciting and fun, turning it into a friendly yet challenging competition.',
    },
  ])

  const [preEvents] = useState([
    {
      id: 1,
      imgSrc: '/hackfest.webp',
      title: 'KU HACKFEST',
      isApplicationOpen: true,
      formLink: 'https://dorahacks.io/hackathon/kuhackfest/detail',
      details:
        ' “KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 15-17 November 2024. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems. By gathering programmers, developers, designers, and tech enthusiasts from around the globe, KU Hackfest creates a dynamic environment for knowledge sharing and collaboration. Participants will benefit from extensive networking opportunities, interactive workshops, and expert mentorship, bridging the gap between academia and industry. Building on past successes, KU Hackfest 2024 aspires to surpass previous iterations in scope and impact. Last year KU Hackfest 2023, held from September 29 to October 1, was Nepal’s largest in-person Major League Hacking (MLH) hackathon, attracting 501 applicants from diverse backgrounds and resulting in 51 finalized projects. With a cash prize pool exceeding Rs. 1,70,000, the event fostered teamwork and creativity, offering young coders a platform to showcase their skills, learn, and collaborate on innovative solutions.',
    },
    {
      id: 2,
      imgSrc: '/tedxlogo.webp',
      title: 'TEDx',
      isApplicationOpen: false,
      formLink: '',
      details:
        'For IT Meet 2024, the Kathmandu University Computer Club (KUCC) is collaborating with TEDx to bring a remarkable event to this year’s lineup. This pre-event will feature a diverse array of speakers from various sectors, including prominent national figures, who will share their insights and experiences. TEDx events are locally organized gatherings where live TED-like talks and performances are presented to the community, creating a unique platform for exchanging ideas and promoting deep discussions. The TEDx collaboration at IT Meet promises a day filled with brilliant speakers, thought-provoking conversations, and new connections. By bringing TEDx to IT Meet, KUCC aims to inspire and inform attendees, unleashing new ideas with the potential to transform perspectives and ignite innovative thinking.',
    },
    {
      id: 3,
      imgSrc: '/mobile.webp',
      title: 'Mobile Rush',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/LpS5JKDhb3stjjH66',
      details:
        '“Mobile Rush” is an event conducted mainly focusing on high school and undergraduate students passionate about mobile development. The event aims to provide a platform for budding mobile developers to showcase their skills, recognize and reward exceptional talent. The event involves participants tackling straightforward tasks within a set time frame. In IT Meet 2023, the participants were challenged to translate a provided Figma design into a mobile app’s front end using their preferred development framework, blending technical proficiency with creative problem-solving. With 13 participants, Mobile Rush provided a dynamic stage for showcasing talents and encouraging creativity.',
    },
    {
      id: 4,
      imgSrc: '/CodeCamp.webp',
      title: 'Code Camp',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/fRjJw9CNLvvpZidU8',
      details:
        '“Code Camp” is also one of the main events of IT Meet that ignites creativity and brilliance among participants who collaborate in teams of three, engaging in a coding marathon on their selected development platforms. Throughout the event, teams delve into crafting innovative solutions, showcasing their technical prowess and problem-solving abilities. Expert judges assess projects based on criteria such as market viability, relevance, and innovation level, spotlighting potential industry disruptors and pioneering ideas. Last year, in IT Meet 2023, CodeCamp drew 45 participants who demonstrated exceptional ingenuity and coding skills, illustrating their dedication to advancing technology and innovation at IT MEET.',
    },
    {
      id: 5,
      imgSrc: '/itcup.webp',
      title: 'All Nepal IT Cup',
      isApplicationOpen: true,
      formLink: 'linktr.ee/allnepalitcup',
      details:
        'This year, IT Meet is proud to introduce the inaugural "All Nepal IT Cup," a grand event featuring football and basketball competitions. Designed exclusively for IT students, this exciting pre-event aims to bring together participants from various institutions across Nepal, cultivating a sense of fellowship and encouraging healthy competition. The All Nepal IT Cup offers a unique opportunity for students to showcase their athletic talents while networking with peers, enhancing both their physical and professional skills in a vibrant, engaging environment.',
    },
    {
      id: 6,
      imgSrc: '/geospecial.webp',
      title: 'Geo Special',
      isApplicationOpen: true,
      formLink: 'https://tiny.cc/mappingku',
      details:
        '“Geo-Special” is a series of events under IT Meet, designed to help students explore open-source geospatial data and technologies, promoting their unexplored potential. Through hands-on training sessions, interactive workshops, and personalized mentoring, participants gain essential skills to harness open-source geo-data technologies, enabling them to transform concepts into innovative project solutions. IT Meet 2023’s Geo-Special program, attended by 50 participants, featured three distinct events: the OSM Contributors Meetup, Geospatial Tech Webinar, and Geo Idea Contest. This comprehensive program brought together geospatial enthusiasts, and provided valuable insights from experts. The event successfully highlighted the importance and potential of geospatial technology, contributing to the growth and knowledge of all attendees.',
    },
    {
      id: 7,
      imgSrc: '/ai.webp',
      title: 'AI Competition',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/Hs7oywqXAxk8kfPH6',
      details:
        'The “AI Competition” event in IT Meet provides a platform for individuals to discover the cutting-edge advancements in Artificial Intelligence (AI) in Nepal. This event brings together teams of up to four participants to tackle software and hardware-based challenges, developing minimum viable products that address real-world problems. Aimed at familiarizing students with the AI industry, the competition encourages innovation and technical skill enhancement. Last year, in IT Meet 2023, the competition featured categories in LLM, Data Extraction, and Data Visualization, with 12 teams and 40 individuals participating. Judges evaluated concepts, pitches, and final products, recognizing the most innovative teams. The AI Competition provides a platform for idea sharing, collaboration, and growth in the AI field.',
    },
    {
      id: 8,
      imgSrc: '/empoweher.webp',
      title: 'EmpowerHer',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/kyqKPUAzGLMBzzX87',
      details:
        '“EmpowerHer” is an innovative initiative aimed at inspiring and empowering young girls by providing a platform to amplify their voices, engage in meaningful discussions, and connect with like-minded individuals in the tech industry. Featuring insightful talks, interactive workshops, and engaging tech-themed activities, EmpowerHER equips participants with the confidence and skills necessary to excel in the evolving tech landscape. This event is a pioneering effort to create an inclusive and empowering environment for girls in tech, boosting self-expression, learning, and engagement. The inaugural EmpowerHER ‘23 event was a significant success, drawing around 80 participants and highlighted speakers like Guna Kesari Pradhan, Roja Kiran Basukala, and Agma Malakar. The event fostered inspiration and dialogue, with notable moments including the “#iamremarkable” reflection session and discussions on women‘s roles in government technology, marking a significant step towards creating an inclusive and empowering environment for girls in tech.',
    },
    {
      id: 9,
      imgSrc: '/alumnimeet.webp',
      title: 'Alumni Meet',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/pcKX3CLpiiuLVjiPA',
      details:
        'The “Alumni Meet” is a gathering that unites graduates from the Department of Computer Science and Engineering, offering them a platform to reconnect, network, and share their experiences. This event fosters a strong sense of community among alumni, allowing them to reminisce about their university years, celebrate their achievements, and reflect on their professional journeys since graduation. In Alumni Meet 2023, approximately 27 alumni attended, spanning graduation years from 2000 onwards. The event featured nostalgic reunions where alumni reconnected with peers and professors, shared personal and professional accomplishments, and imparted valuable insights to current students, inspiring them to envision their own future paths. Their contributions added depth and significance to the event, creating a memorable and enriching experience for all participants.',
    },
    {
      id: 10,
      imgSrc: '/idea_pitching.webp',
      title: 'Idea Pitching',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/DRYsCcT1ExHf25BS7',
      details:
        'The “Idea Pitching” competition at IT Meet emphasizes the convergence of creativity, innovation, and strategic foresight. It provides participants with a unique opportunity to showcase their ability to articulate compelling ideas. Each contestant is tasked with delivering a succinct pitch, addressing specific topics provided by the organizers. Judges, esteemed professionals in their fields, evaluate pitches based on criteria such as market feasibility, efficient resource allocation, and scalability potential. This event serves as a pivotal learning experience for engineering students, offering valuable insights into the intricacies of management and nurturing their entrepreneurial spirit. By participating, students expand their horizons, gain practical knowledge, and develop essential skills in pitching and business strategy, preparing them for future challenges in the professional world.',
    },
    {
      id: 11,
      imgSrc: '/treasurehunt.webp',
      title: 'AR Treasure Hunt',
      isApplicationOpen: true,
      formLink: 'https://arth24.tech/',
      details:
        'The “AR Treasure Hunt” is an exhilarating event that introduces participants to the world of Augmented Reality. Emulating the excitement of games like Pokémon Go, teams embark on an adventure, following clues to uncover hidden treasures. The 2023 AR Treasure Hunt, marking its second edition, seamlessly combined technology and cultural exploration. With 218 attendees, the event featured multiple exciting rounds and culminated in a thrilling finale at Patan Durbar Square.',
    },
    {
      id: 12,
      imgSrc: '/kubing.webp',
      title: 'KUBing',
      isApplicationOpen: true,
      formLink: 'https://www.worldcubeassociation.org/competitions/KUbingNepal2024/register',
      details:
        '“KUbing Competition” is one of the pre-events of IT Meet which provides a platform for enhancing problem-solving skills, cognitive abilities, and community spirit. It also encourages participants to develop their speed and efficiency in solving the cube, enhancing both friendly competition and personal growth. KUbing Nepal 2023, an innovative initiative marking the debut of CubeConnect at Kathmandu University, provided a unique platform for cubers to sharpen their skills, engage in friendly competitions, and connect with fellow enthusiasts. The event featured 52 participants, broke three national records, and adhered to World Cube Association (WCA) standards, ensuring integrity and fairness.',
    },
    {
      id: 13,
      imgSrc: '/weshieldlogo.webp',
      title: 'We Shield Cyber',
      isApplicationOpen: true,
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9SpFmwz3QVm5oQtVF6xXfS-HiajySVEOOUT9sNZ4iJiLEMQ/viewform ',
      details:
        '"We Shield Cyber" is a premier cybersecurity conference at IT Meet 2024, organized by the Kathmandu University Networking and Cybersecurity Community in collaboration with Women in Cybersecurity Nepal. This event offers participants a unique opportunity to engage with leading cybersecurity experts through seminars, gain hands-on experience in a Capture The Flag (CTF) challenge, and explore career opportunities in a dedicated career fair. "We Shield Cyber" aims to raise awareness about the critical importance of cybersecurity, inspire future professionals, and nurture a community committed to protecting digital systems in an increasingly interconnected world.',
    },
  ])

  const [listEvents] = useState([
    {
      id: 1,
      imgSrc: '/hackfest.webp',
      title: 'KU HACKFEST',
      isApplicationOpen: true,
      formLink: 'https://dorahacks.io/hackathon/kuhackfest/detail',
      description:
        '“KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 15-17 November 2024. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems.',
      details:
        ' “KU Hackfest”, one of the biggest events within IT Meet, is an international-level, 48-hour hackathon, scheduled for 15-17 November 2024. This event aims to cultivate creativity, drive innovation, and empower talented individuals to solve real-world problems. By gathering programmers, developers, designers, and tech enthusiasts from around the globe, KU Hackfest creates a dynamic environment for knowledge sharing and collaboration. Participants will benefit from extensive networking opportunities, interactive workshops, and expert mentorship, bridging the gap between academia and industry. Building on past successes, KU Hackfest 2024 aspires to surpass previous iterations in scope and impact. Last year KU Hackfest 2023, held from September 29 to October 1, was Nepal’s largest in-person Major League Hacking (MLH) hackathon, attracting 501 applicants from diverse backgrounds and resulting in 51 finalized projects. With a cash prize pool exceeding Rs. 1,70,000, the event fostered teamwork and creativity, offering young coders a platform to showcase their skills, learn, and collaborate on innovative solutions.',
    },
    {
      id: 2,
      imgSrc: '/empoweher.webp',
      title: 'EMPOWER HER',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/kyqKPUAzGLMBzzX87',
      description:
        '"EmpowerHer" is an initiative designed to inspire young girls in tech by providing a platform for discussion, skill-building workshops, and networking. ',
      details:
        '“EmpowerHer” is an innovative initiative aimed at inspiring and empowering young girls by providing a platform to amplify their voices, engage in meaningful discussions, and connect with like-minded individuals in the tech industry. Featuring insightful talks, interactive workshops, and engaging tech-themed activities, EmpowerHER equips participants with the confidence and skills necessary to excel in the evolving tech landscape. This event is a pioneering effort to create an inclusive and empowering environment for girls in tech, boosting self-expression, learning, and engagement. The inaugural EmpowerHER ‘23 event was a significant success, drawing around 80 participants and highlighted speakers like Guna Kesari Pradhan, Roja Kiran Basukala, and Agma Malakar. The event fostered inspiration and dialogue, with notable moments including the “#iamremarkable” reflection session and discussions on women‘s roles in government technology, marking a significant step towards creating an inclusive and empowering environment for girls in tech.',
    },
    {
      id: 3,
      coc: '/coc_codecamp.pdf',
      imgSrc: '/CodeCamp.webp',
      title: 'CODE CAMP',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/fRjJw9CNLvvpZidU8',
      description:
        '“Code Camp” is also one of the main events of IT Meet that ignites creativity and brilliance among participants who collaborate in teams of three, engaging in a coding marathon on their selected development platforms.',
      details:
        '“Code Camp” is also one of the main events of IT Meet that ignites creativity and brilliance among participants who collaborate in teams of three, engaging in a coding marathon on their selected development platforms. Throughout the event, teams delve into crafting innovative solutions, showcasing their technical prowess and problem-solving abilities. Expert judges assess projects based on criteria such as market viability, relevance, and innovation level, spotlighting potential industry disruptors and pioneering ideas. Last year, in IT Meet 2023, CodeCamp drew 45 participants who demonstrated exceptional ingenuity and coding skills, illustrating their dedication to advancing technology and innovation at IT MEET.',
    },
    {
      id: 4,
      imgSrc: '/treasurehunt.webp',
      title: 'AR TREASURE HUNT',
      isApplicationOpen: true,
      formLink: 'https://arth24.tech/',
      description:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures.',
      details:
        'The "AR Treasure Hunt" is an exciting event that immerses participants in Augmented Reality, similar to Pokémon Go, as they follow clues to find hidden treasures. In its 2023 edition, the event attracted 218 attendees and combined technology with cultural exploration, culminating in a thrilling finale at Patan Durbar Square.',
    },
    {
      id: 5,
      imgSrc: '/AcousticNight.webp',
      title: 'Acoustic Night',
      isApplicationOpen: true,
      formLink: 'https://forms.gle/CBuJ5dvMYgz8f8bG8',
      description:
        '"Acoustic Night," the closing event of IT Meet, features talented student performances that create an enchanting evening filled with diverse melodies, fostering connections among attendees.s',
      details:
        'Acoustic Night” is a special celebration of music and serves as the closing event of IT MEET. This event features talented students performing a variety of songs, creating an enchanting evening of melodies. The performances will build connections between students and the guests of IT MEET. Acoustic Night offers a memorable conclusion to the journey, leaving participants with cherished memories. This event not only showcases the musical talents within the community but also marks the successful conclusion of IT Meet.',
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
