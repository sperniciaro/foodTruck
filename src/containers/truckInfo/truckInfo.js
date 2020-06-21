import React, {Component} from "react";

export class Trucks extends Component{
    render() {
        return (
            <div className="truck-card-container">
                {/*card info */}
                <div className="truck-card">
                    <div>
                        <strong>Name:</strong> <i>Tacos El Ojo De Agua</i>
                    </div>
                    <div>
                        <strong>Location:</strong> <i>551 03RD ST</i>
                    </div>
                    <div className="foodInfo">
                        <strong>Food:</strong> <i>Tacos: Burritos: Tortas: Quesadillas: Salads: Soup: Fruits: Juices:
                        Soda: Water</i>
                    </div>
                    <div>
                        <strong>Distance:</strong> <i>TBD</i>
                    </div>
                </div>
                {/*card info */}
                <div className="truck-card">
                    <div>
                        <strong>Name:</strong> <i>Akuranvyka USA Inc</i>
                    </div>
                    <div>
                        <strong>Location:</strong> <i>601 03RD ST</i>
                    </div>
                    <div className="foodInfo">
                        <strong>Food:</strong> <i>Indian Street Food: Tikka Masala Burritos; Samosas; Sexy Fries
                        (Indian-inspired poutine); Naughty Naans; Deconstructed Samosas; Kathi Rolls; Lassis and
                        Lemonades</i>
                    </div>
                    <div>
                        <strong>Distance:</strong> <i>TBD</i>
                    </div>
                </div>
                {/*card info */}
                <div className="truck-card">
                    <div>
                        <strong>Name:</strong> <i>Off the Grid Services, LLC</i>
                    </div>
                    <div>
                        <strong>Location:</strong> <i>340 BRANNAN ST</i>
                    </div>
                    <div className="foodInfo">
                        <strong>Food:</strong> <i>Everything</i>
                    </div>
                    <div>
                        <strong>Distance:</strong> <i>TBD</i>
                    </div>
                </div>
                {/*card info */}
                <div className="truck-card">
                    <div>
                        <strong>Name:</strong> <i>Roadside Rotisserie Corporation / Country Grill</i>
                    </div>
                    <div>
                        <strong>Location:</strong> <i>333 BRANNAN ST</i>
                    </div>
                    <div className="foodInfo">
                        <strong>Food:</strong> <i>Rotisserie Chicken; Ribs; Pork Loin; Roasted Potatoes; Chicken Wrap;
                        Kale Salad; Drinks</i>
                    </div>
                </div>
                {/*card info */}
                <div className="truck-card">
                    <div>
                        <strong>Name:</strong> <i>Mike's Catering</i>
                    </div>
                    <div>
                        <strong>Location:</strong> <i>Assessors Block 3788/Lot002</i>
                    </div>
                    <div className="foodInfo">
                        <strong>Food:</strong> <i>Cold Truck: packaged sandwiches: snacks: candy: hot and cold
                        drinks</i>
                    </div>
                    <div>
                        <strong>Distance:</strong> <i>TBD</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trucks;
