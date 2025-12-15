import {
  ExternalLink,
  MapPin,
  Compass,
  Signal,
  CheckCircle2,
  Camera,
  Smartphone,
  Globe,
} from 'lucide-react'

export default function ARNavigation() {
  const handleLaunchAR = () => {
    window.open('/ar-navigation/index.html', '_blank')
  }

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-[#12dc9f]" />,
      title: 'Select Event',
      description:
        'Browse through the event carousel at the bottom of the screen. Swipe left or right to explore different events. Tap on any event card to set it as your navigation destination.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#12dc9f]" />,
      title: 'Follow Arrow',
      description:
        'A yellow 3D arrow will appear in your AR view, pointing directly towards your selected destination. Follow the arrow as it smoothly rotates to guide you in real-time.',
    },
    {
      icon: <Signal className="w-8 h-8 text-[#12dc9f]" />,
      title: 'Track Progress',
      description:
        'The HUD (Heads-Up Display) at the top shows your distance to the destination in meters, cardinal direction (N, S, E, W), and signal strength bars based on proximity.',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#12dc9f]" />,
      title: 'Arrive',
      description:
        "When you reach within 15 meters of your destination, an arrival banner appears with a confetti celebration effect to confirm you've successfully reached your event location.",
    },
  ]

  const requirements = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Compatible Device',
      description: 'Smartphone or tablet with camera and GPS capabilities',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Camera Access',
      description: 'Grant camera permissions when prompted for AR view',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location Access',
      description: 'Enable GPS and location permissions for accurate navigation',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Modern Browser',
      description: 'Use Chrome or Safari for best experience',
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden p-6 sm:p-8 md:p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] pb-1">
          Navigate with AR
        </h1>
        <div className="w-32 sm:w-40 md:w-48 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mt-4">
          Find your way to IT Meet events using augmented reality technology. Get real-time guidance
          with 3D navigation right through your device&apos;s camera.
        </p>
      </div>

      <div className="w-full max-w-3xl mt-12 md:mt-16 flex flex-col items-center gap-6">
        <button
          onClick={handleLaunchAR}
          className="group relative px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#369fff] to-[#12dc9f] rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#12dc9f]/50 flex items-center gap-3"
        >
          Launch AR Navigation
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="w-full max-w-5xl mt-8 md:mt-12">
        <div className="flex flex-col items-center gap-3 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            Requirements & Precautions
          </h2>
          <div className="w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-[#1a1d28] border border-[#369fff]/20 rounded-lg p-4 hover:border-[#12dc9f]/40 transition-all"
            >
              <div className="p-2 bg-gradient-to-br from-[#369fff]/20 to-[#12dc9f]/20 rounded-lg text-[#12dc9f]">
                {req.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{req.title}</h4>
                <p className="text-xs text-gray-400">{req.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 md:p-6">
          <h3 className="text-lg font-semibold text-orange-400 mb-4 text-center">
            ️Important Notes
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <span className="text-orange-400 flex-shrink-0">•</span>
              <span className="flex-1">
                Stay aware of your surroundings while using AR navigation. Watch for obstacles,
                people, and traffic.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-400 flex-shrink-0">•</span>
              <span className="flex-1">
                GPS accuracy may vary based on weather, building density, and satellite visibility.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-400 flex-shrink-0">•</span>
              <span className="flex-1">
                Works best outdoors with clear sky view. Indoor accuracy may be reduced.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-400 flex-shrink-0">•</span>
              <span className="flex-1">
                Keep your device charged as AR and GPS usage can drain battery quickly.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-400 flex-shrink-0">•</span>
              <span className="flex-1">
                If the arrow doesn’t appear, try selecting a different event or refreshing the page.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-8 md:mt-12">
        <div className="flex flex-col items-center gap-3 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            How It Works
          </h2>
          <div className="w-24 sm:w-32 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#369fff]/5 to-[#12dc9f]/5 border border-[#369fff]/20 rounded-xl p-6 hover:border-[#12dc9f]/40 transition-all duration-300 "
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#369fff]/20 to-[#12dc9f]/20 rounded-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
