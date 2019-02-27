import React from 'react';
//import styles from './Map.css'
//import './Map.css';
import { Map as OpenMap, TileLayer, Marker, Popup } from 'react-leaflet'

const stamenTonerTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const stamenTonerAttr = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export default class Map extends React.Component {
    state = {
        lat: 52.5663683,
        lng: 18.1069481,
        zoom: 14
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
             	   <OpenMap center={position} zoom={this.state.zoom} style={{height: "40vh"}}>
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles} />
                    <Marker position={position}>
                        <Popup>
                            VAT - PIT
                    </Popup>
                    </Marker>
                </OpenMap>
            </div>
        )
    }
}
