import React, { Component } from "react";
import { ReactBingmaps } from 'react-bingmaps';

export class MapContainer extends Component{
    render(){
        return(
            <div className="mapWrapper">
                <ReactBingmaps
                    bingmapKey = 'Au6CC-Ou9nmhMoBiv_JwXfwKc1xxRddz-dQ0yLaWEnefSRyk_kdXTItzuut02gl6'
                    center = {[37.7821, -122.3938]} //San Fran 37.7749, -122.4194
                    zoom = {16}
                    infoboxesWithPushPins = {[
                        {
                            "location":[37.7806, -122.3946],
                            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                            "infoboxOption": { title: 'Tacos El Ojo De Agua', description: '551 03RD ST' },
                            "pushPinOption":{ title: '', description: '' }
                        },
                        {
                            "location":[37.7800, -122.3937],
                            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                            "infoboxOption": { title: 'Akuranvyka USA Inc', description: '601 03RD ST' },
                            "pushPinOption":{ title: '', description: '' }
                        },
                        {
                            "location":[37.7812, -122.3932],
                            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                            "infoboxOption": { title: 'Off the Grid Services, LLC', description: '340 BRANNAN ST' },
                            "pushPinOption":{ title: '', description: '' }
                        },
                        {
                            "location":[37.7809, -122.3924],
                            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                            "infoboxOption": { title: 'Roadside Rotisserie Corporation / Country Grill', description: '333 BRANNAN ST' },
                            "pushPinOption":{ title: '', description: '' }
                        },
                        {
                            "location":[37.7810, -122.3917],
                            "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                            "infoboxOption": { title: 'Mike\'s Catering', description: 'Assessors Block 3788/Lot002' },
                            "pushPinOption":{ title: '', description: '' }
                        }
                    ]
                    }>
                </ReactBingmaps>
            </div>
        )
    }
}

export default MapContainer;
