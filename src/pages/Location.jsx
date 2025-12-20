import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { GraduationCap } from 'lucide-react'
import LogoMap from '@/assets/images/logoMap.webp'
import { ExternalLink } from 'lucide-react'
import ARPreviewCard from '@/components/custom/ARPreviewCard'

export default function LocationPage() {
  const position = [27.617225501485724, 85.53628499165596]
  const fillBlueOptions = { fillColor: 'blue' }
  const iconCustom = new Icon({
    iconUrl: LogoMap,
    iconSize: [32, 34],
  })

  return (
    <div
      id="locations"
      className="flex flex-col p-6 sm:p-8 md:p-10 py-20 lg:px-20 overflow-hidden gap-8 items-center justify-center min-h-screen bg-[#171A23]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Event Location
        </h1>
        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      <ARPreviewCard />

      <div className="w-full px-4">
        <MapContainer
          center={[27.617225501485724, 85.53628499165596]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={iconCustom}>
            <Popup>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-red-600 gray" />
                <h1 className="font-bold">Kathmandu University</h1>
              </div>
              <h2 className="text-center font-semibold text-xs">IT MEET 25' VENUE </h2>
            </Popup>
          </Marker>
          <CircleMarker center={position} pathOptions={fillBlueOptions} radius={40} />
        </MapContainer>
      </div>
    </div>
  )
}
