import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents} from 'react-leaflet'
import "./itinerary.css";
import 'leaflet/dist/leaflet.css';

function Itinerary() {
    const MyLocalisation = ()=>{
        const [position, setPosition] = useState(null)
        
        const map = useMapEvents(
            {
                
                locationfound(e){
                    setPosition(e.latlng)
                    //map.flyTo(e.latlng, map.getZoom())
                },
            }
        )
        useEffect(()=>{
            map.locate()
    },[position])
        return position === null ? null : 
        (
            <Marker position={position}>
                <Popup>Position Actuel</Popup>
            </Marker>
        )
    }

    return (
        <div >
            <p>Maps</p>
            <MapContainer center={[-15.505, 47.527]} zoom={13} scrollWheelZoom={false} style={{height:"400px", width:"600px", position:'relative', left:"280px"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
            <MyLocalisation/>
            </MapContainer>
        </div>
    )
}

export default Itinerary