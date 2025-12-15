import React from 'react'
import { ExternalLink, Compass, Smartphone, Navigation } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ARPreviewCard() {
  const navigate = useNavigate()
  const handleLaunchAR = () => {
    window.open('/ar-navigation/index.html', '_blank')
  }

  return (
    <section className="w-full py-12 px-4 flex justify-center bg-[#171A23]">
      <div className="relative w-full max-w-5xl bg-[#1a1d28] border border-[#369fff]/20 rounded-3xl overflow-hidden p-8 md:p-12 group hover:border-[#12dc9f]/40 transition-all duration-500 shadow-2xl shadow-black/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#369fff]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#12dc9f]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#369fff]/10 to-[#12dc9f]/10 border border-[#369fff]/20 text-xs font-medium text-[#12dc9f]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12dc9f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12dc9f]"></span>
              </span>
              Live Feature
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Don't get lost. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                Navigate with AR.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Experience the campus like never before. Point your camera, follow the floating
              arrows, and find your event instantly using our 3D Augmented Reality guide.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <button
                onClick={handleLaunchAR}
                className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#369fff] to-[#12dc9f] rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#12dc9f]/25 transition-all duration-300 flex items-center gap-2"
              >
                Launch Experience
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/ar-navigation')
                }} // Optional: Link to the detailed instruction page
                className="px-8 py-3.5 text-base font-semibold text-gray-300 border border-gray-700 bg-white/5 rounded-full hover:bg-white/10 hover:border-gray-500 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#369fff]/10 to-[#12dc9f]/10 rounded-full border border-[#369fff]/20 flex items-center justify-center backdrop-blur-sm animate-float">
              <div className="absolute inset-0 rounded-full border-t border-r border-[#12dc9f]/50 animate-spin-slow"></div>

              <div className="w-40 h-40 bg-[#1a1d28] rounded-full flex items-center justify-center shadow-xl border border-[#369fff]/30 relative">
                <Compass className="w-20 h-20 text-white" strokeWidth={1} />

                <div className="absolute -top-4 -right-4 bg-[#1a1d28] border border-[#12dc9f]/40 p-3 rounded-xl shadow-lg animate-bounce-slow">
                  <Navigation className="w-6 h-6 text-[#12dc9f]" />
                </div>
                <div className="absolute -bottom-2 -left-4 bg-[#1a1d28] border border-[#369fff]/40 p-3 rounded-xl shadow-lg animate-bounce-slow delay-700">
                  <Smartphone className="w-6 h-6 text-[#369fff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </section>
  )
}

