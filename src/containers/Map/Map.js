import React from 'react';
import {render} from 'react-dom';
//import styles from './Map.css'
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const stamenTonerTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const stamenTonerAttr = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export default class Localization extends React.Component {
    state = {
        lat: 52.3211,
        lng: 56.34231,
        zoom: 16
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map center={position} zoom={this.state.zoom} style={{height: "40vh"}}>
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles} />
                    <Marker position={position}>
                        <Popup>
                            VAT - PIT
                    </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

// render(Localization, document.getElementById('map-container'))
