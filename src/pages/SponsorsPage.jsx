import { useEffect, useState } from 'react'
import { FetchSponsorsData } from '../components/custom/Sponsors.jsx'

// Component to display individual sponsors
const Sponsor = ({ name, image }) => (
  <div className="flex items-center">
    <img src={image} alt={`${name} Logo`} className="sponsor-logo object-contain w-[100px] md:w-[120px] lg:w-[140px]" />
  </div>
)

// Component for sponsor tiers
const SponsorTier = ({ tier, sponsors }) => (
  <div className="sponsor-group flex flex-col items-center gap-8">
    <h3 className="sponsor-tier text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
      {tier} Sponsors
    </h3>

    {/* Display all sponsors under this tier */}
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      {sponsors.map((sponsor, index) => (
        <Sponsor key={index} name={sponsor.name} image={sponsor.image} />
      ))}
    </div>
  </div>
)

export default function SponsorPage() {
  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  // Grouping sponsors by their tiers
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    const tier = sponsor.tier || 'Other'
    if (!acc[tier]) {
      acc[tier] = []
    }
    acc[tier].push(sponsor)
    return acc
  }, {})

  return (
    <div
      id="sponsors"
      className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Our Sponsors
        </h1>
        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      {/* Render sponsors grouped by tiers */}
      <div className='mt-5 space-y-12 lg:space-y-16'>
      {Object.keys(groupedSponsors).map((tier) => (
        <SponsorTier key={tier} tier={tier} sponsors={groupedSponsors[tier]} />
      ))}
      </div>
    </div>
  )
}
