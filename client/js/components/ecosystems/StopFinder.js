'use strict'

const React = require('react');
const Component = React.Component;

class StopFinder extends Component {
    render() {
        return (
            <section id="StopFinder">
                <h1>HRTB.us</h1>
                <h2>Stop Finder</h2>
                <div>
                    <h3>By Stop Number</h3>
                <form method="GET" action="/api/v1/stopId">
                    <label htmlFor="stopId">Stop Number:</label>
                    <input id="stopId" name="stopId" type="number" />
                    <button className="loadMore">Search</button>
                </form>
                </div>
                <div>
                    <h3>By Street Intersection</h3>
                <form method="GET" action="/api/v1/intersections">
                <fieldset>
                    <label htmlFor="intersection1">First Street: </label>
                    <input id="intersection1" name="intersection1" placeholder="First Street" />
                </fieldset>
                <fieldset>    
                    <label htmlFor="intersection2">Second Street: </label>
                    <input id="intersection2" name="intersection2" placeholder="Second Street" />
                </fieldset>
                <button class="loadMore">Search</button>    
                </form>
                </div>
            </section>
        )
    }
}

module.exports = StopFinder;