import React from 'react'
import TitleLine from '../../../../../../components/TitleLine'
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import marker from '../../../../../../assets/marker.svg'
import './Maps.sass'

export default function Maps() {
    const center = [27.6227443, 85.5310493];
    const iconPerson = new L.Icon({
        iconUrl: (marker),
        iconRetinaUrl: (marker),
        popupAnchor: [-0, -0],
        iconSize: new L.Point(32, 32),
        className: 'leaflet-div-icon'
    });
    return (
        <div className='Maps'>
            <div className="title">
                <h1>Get directions</h1>
                <TitleLine />
            </div>
            <div className='map'>
                <MapContainer
                    className="leaf"
                    center={center}
                    zoom={14}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={center} icon={iconPerson}>
                        <Popup>
                            Kathmandu University <br /> IT Meet Venue.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
