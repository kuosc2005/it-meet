import { useEffect, useState } from 'react'
import { FetchSponsorsData } from '../components/custom/Sponsors.jsx'

const Sponsor = ({ name, tier, image }) => (
  <div className="sponsor-group flex flex-col items-center gap-2 md:gap-8">
    <h3
      className="sponsor-tier text-lg sm:text-xl md:text-3xl font-bold text-[#12dc9f]"
      style={{
        backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {tier}
    </h3>

    {tier === 'Gold' ? (
      <div className="flex items-center gap-6">
        <div>
          <img
            src={image}
            alt={`${tier} - Logo 1`}
            className="sponsor-logo object-contain w-[140px]"
          />
        </div>
        <div>
          <img
            src={image}
            alt={`${tier} - Logo 2`}
            className="sponsor-logo object-contain w-[140px] "
          />
        </div>
      </div>
    ) : tier === 'Bronze Sponsor' || tier === 'Community Partners' || tier === 'Supported By' ? (
      <div className="flex flex-row gap-6 ">
        <img
          src={image}
          alt={`${tier} - Logo 1`}
          className="sponsor-logo object-contain w-[140px]"
        />
        <img
          src={image}
          alt={`${tier} - Logo 2`}
          className="sponsor-logo object-contain w-[140px]"
        />
        <img
          src={image}
          alt={`${tier} - Logo 3`}
          className="sponsor-logo object-contain w-[140px]"
        />
      </div>
    ) : (
      <img src={image} alt={`${tier} - Logo`} className="sponsor-logo object-contain w-[140px]" />
    )}
  </div>
)

export default function SponsorPage() {
  const [sponsors, setSponsors] = useState(null)
  const [loading, setLoading] = useState(true) // To handle loading state
  const [error, setError] = useState(null) // To handle error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchSponsorsData()
        setSponsors(result.documents)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!sponsors || sponsors.length === 0) {
    return <div>No sponsors found.</div>
  }

  return (
    <div
      id="sponsors"
      className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]"
          style={{ backgroundImage: 'linear-gradient(90deg, #369FFF, #3BD0A3, #14C58F)' }}
        >
          Our Sponsors
        </h1>

        {/* Uncomment the following code if you wish to display the ITMeetLogo */}
        {/* <img
          src={ITMeetLogo}
          alt="itmeetlogodark"
          className="object-contain w-[150px]"
          width={500}
          height={500}
        /> */}

        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      {/* Render the sponsors */}
      {sponsors.map((sponsor, index) => (
        <Sponsor key={index} name={sponsor.name} tier={sponsor.tier} image={sponsor.image} />
      ))}
    </div>
  );
}
